import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainRoutingModule} from './main-routing.module';
import {MainComponent} from './main.component';
import {ElementsModule} from './elements/elements.module';
import {InterceptorsModule} from '../shared/interceptors/interceptors.module';
import {GuardsModule} from '../shared/guards/guards.module';


const COMPONENTS = [
  MainComponent,
];

@NgModule({
  declarations: COMPONENTS,
  providers: [],
  imports: [
    CommonModule,
    MainRoutingModule,
    ElementsModule,
    GuardsModule,
    InterceptorsModule
  ],
})
export class MainModule {
}
