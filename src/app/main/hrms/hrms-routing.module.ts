import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HRMSComponent} from './hrms.component';
import {HrDashboardComponent} from './hr-dashboard/hr-dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: HRMSComponent,
    canActivate: [],
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'dashboard', component: HrDashboardComponent, pathMatch: 'full'},
    ],
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HrmsRoutingModule {
}
