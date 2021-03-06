import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HrmsRoutingModule} from './hrms-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HRMSComponent} from './hrms.component';
import {HrDashboardComponent} from './hr-dashboard/hr-dashboard.component';
import {ChartsModule} from '../charts/charts.module';
import {CountToModule} from 'angular-count-to';
import {InterceptorsModule} from '../../shared/interceptors/interceptors.module';


@NgModule({
  declarations: [
    HRMSComponent,
    HrDashboardComponent,
  ],
  providers: [],
  imports: [
    CommonModule,
    HrmsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ChartsModule,
    CountToModule,
    InterceptorsModule
  ],

})
export class HrmsModule {
}
