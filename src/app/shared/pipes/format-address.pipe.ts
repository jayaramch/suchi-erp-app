import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'formatAddress'
})
export class FormatAddressPipe implements PipeTransform {
  transform(value: { [key: string]: string }): string {
    let address = [];

    if (value['address1'] && value['address1'].length > 0) {
      address.push(value['address1']);
    }
    if (value['address2'] && value['address2'].length > 0) {
      address.push(value['address2']);
    }

    const locale = [
      value['city'] && value['city'].length > 0 ? value['city'] + ', ' : '',
      value['state'] && value['state'].length > 0 ? value['state'] + ' ' : '',
      value['zipCode'] && value['zipCode'].length > 0 ? value['zipCode'] : ''
    ].join('');

    if (locale.length > 0) {
      address = address.concat(locale);
    }

    if (value['urbanization'] && value['urbanization'].length > 0) {
      address.push(value['urbanization']);
    }

    return address.join(' ');
  }
}
