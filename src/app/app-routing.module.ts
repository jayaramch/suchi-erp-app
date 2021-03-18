import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {QuicklinkStrategy} from 'ngx-quicklink';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
  },
  // { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: QuicklinkStrategy,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
