import { NgModule } from '@angular/core';
import { AddCommasPipe } from './add-commas.pipe';
import { ArrayifyPipe } from './check-for-array.pipe';
import { EllipsisPipe } from './ellipsis.pipe';
import { FormatAddressPipe } from './format-address.pipe';
import { GroupByPipe } from './group-by.pipe';
import { KeysPipe } from './keys.pipe';
import { ArraySortPipe } from './orderby.pipe';
import { PhoneNumberFormatPipe } from './phone-number-pipe';
import { RemoveZerosPipe } from './remove-zeros-pipe';
import { RoundNumberPipe } from './round-number-pipe';
import { SearchFilterPipe } from './searchfilter.pipe';

const PIPES = [
  AddCommasPipe,
  EllipsisPipe,
  ArrayifyPipe,
  FormatAddressPipe,
  KeysPipe,
  PhoneNumberFormatPipe,
  RemoveZerosPipe,
  RoundNumberPipe,
  SearchFilterPipe,
  ArraySortPipe,
  GroupByPipe,
];

@NgModule({
  declarations: PIPES,
})
export class PipesModule {}
