import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'phoneFormat'})
export class PhoneNumberFormatPipe implements PipeTransform {
  transform(value: string, args: string[]): any {
    if (!value) return value;
    return value.replace(/\w\S*/g, function (txt) {
      return txt.slice(0, 3) + '-' + txt.slice(3, 6) + '-' + txt.slice(6, 15);
    });
  }
}
