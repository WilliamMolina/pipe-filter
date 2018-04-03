import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args: any, stringValues:any): any {
    if (!value) return null;
    if (!args) return value;
    if (!stringValues) return null;
    args = args.toLowerCase();
    return value.filter(function (item: any, i:number) {
        return stringValues[i].includes(args);
    });
  }
}
