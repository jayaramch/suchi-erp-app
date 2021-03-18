import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {ErrorPage2Component} from './error-page2/error-page2.component';
import {AuthComponent} from './auth.component';


export const authRoutes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent, pathMatch: 'full', data: {title: ':: Epic :: Log In'}},
      {path: 'forgot-password', component: ForgotPasswordComponent, data: {title: ':: Epic :: Forgot Password'}},
      {
        path: 'error-404',
        component: ErrorPageComponent,
        data: {title: ':: Epic :: Error-404'}
      },
      {
        path: 'error-500',
        component: ErrorPage2Component,
        data: {title: ':: Epic :: Error-500'}
      },

    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
  static components = [
    LoginComponent,
    ForgotPasswordComponent
  ];

}
