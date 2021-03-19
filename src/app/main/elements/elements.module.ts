import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {AccordionModule} from 'ngx-bootstrap/accordion';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {PopoverModule} from 'ngx-bootstrap/popover';
import {AlertModule} from 'ngx-bootstrap/alert';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ModalModule} from 'ngx-bootstrap/modal';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {ProgressbarModule} from 'ngx-bootstrap/progressbar';
import {ToastrModule} from 'ngx-toastr';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {LeftmenuComponent} from './leftmenu/leftmenu.component';
import {RouterModule} from '@angular/router';
import {InterceptorsModule} from '../../shared/interceptors/interceptors.module';


const COMPONENTS = [
  FooterComponent,
  HeaderComponent,
  LeftmenuComponent
];

@NgModule({
  declarations: COMPONENTS,
  providers: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    BsDatepickerModule.forRoot(),
    CollapseModule.forRoot(),
    AccordionModule.forRoot(),
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    CarouselModule.forRoot(),
    ToastrModule.forRoot({}),
    InterceptorsModule
  ],
  exports: COMPONENTS
})
export class ElementsModule {
}
