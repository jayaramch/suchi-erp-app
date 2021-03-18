import { NgModule } from '@angular/core';
import { AutoFocusDirective } from './autofocus.drective';
import { DisableDirective } from './disable.directive';
import { InputDecimalDirective } from './input-decimal.directive';
import { OffClickDirective } from './off-click.directive';
import { PermissionDirective } from './permission.directive';

const DIRECTIVES = [
  AutoFocusDirective,
  DisableDirective,
  InputDecimalDirective,
  OffClickDirective,
  PermissionDirective,
];

@NgModule({
  declarations: DIRECTIVES,
})
export class DirectivesModule {}
