import { NgModule } from '@angular/core';
import { AuthGuard } from './auth.guard';

const GUARDS = [AuthGuard];

@NgModule({
  providers: GUARDS,
})
export class GuardsModule {}
