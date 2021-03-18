import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainRoutingModule} from './main-routing.module';
import {MainComponent} from './main.component';
import {ElementsModule} from './elements/elements.module';


const COMPONENTS = [
  MainComponent,
];

@NgModule({
  declarations: COMPONENTS,
  providers: [],
  imports: [
    CommonModule,
    MainRoutingModule,
    ElementsModule
  ],
})
export class MainModule {
}
