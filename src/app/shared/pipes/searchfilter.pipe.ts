import {Pipe, PipeTransform} from '@angular/core';
@Pipe({name: 'searchfilter'})
export class SearchFilterPipe implements PipeTransform {
  transform(items: any[], searchText: string, key: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter(it => it[key].toLowerCase().includes(searchText));
  }
}
