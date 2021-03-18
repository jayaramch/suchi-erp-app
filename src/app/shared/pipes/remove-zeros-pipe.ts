import {Pipe, PipeTransform} from '@angular/core';
@Pipe({name: 'removeZeros'})
export class RemoveZerosPipe implements PipeTransform {
  transform(value: any, args: string[]): any {
    const valueOut = (Number(value).toString() !== 'NaN') ? Number(value) : value;

    return valueOut;
  }
}
