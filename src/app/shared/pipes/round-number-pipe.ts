import {Pipe, PipeTransform} from '@angular/core';
@Pipe({name: 'roundNumber'})
export class RoundNumberPipe implements PipeTransform {
  transform(value: any, args: string[]): any {
    const valueOut = (!value) ? '' : +value;
    return (valueOut.toString() !== 'NaN') ? Math.round(Number(valueOut)) : value;
  }
}
