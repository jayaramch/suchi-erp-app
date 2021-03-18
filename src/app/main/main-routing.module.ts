import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main.component';
import {HrDashboardComponent} from './hrms/hr-dashboard/hr-dashboard.component';

export const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [],
    children: [
      {path: '', redirectTo: 'hr', pathMatch: 'full'},
      {
        path: 'hr',
        loadChildren: () => import('./hrms/hrms.module').then((m) => m.HrmsModule),
      }
    ],
  },


];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule],
})
export class MainRoutingModule {
}
