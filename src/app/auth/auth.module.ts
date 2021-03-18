import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './login/login.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {RegisterComponent} from './register/register.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {ErrorPage2Component} from './error-page2/error-page2.component';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {AuthComponent} from './auth.component';
import {AuthService} from './services/auth.service';
import {BlockUIModule} from 'ng-block-ui';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    CarouselModule.forRoot(),
    BlockUIModule.forRoot({
      message: 'Loading...',
    }),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [
    AuthRoutingModule.components,
    AuthComponent,
    LoginComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    ErrorPageComponent,
    ErrorPage2Component],
  providers: [AuthService]
})
export class AuthModule {
}
