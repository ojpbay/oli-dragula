import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluralisePipe'
})
export class PluralisePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let result = value.toString();
    const i = result.substr(result.length - 1);

    switch (i) {
      case '1':
        result += 'st';
        break;
      case '2':
        result += 'nd';
        break;
      case '3':
        result += 'rd';
        break;
      default:
        result += 'th';
        break;
    }

    return result;
  }

}
