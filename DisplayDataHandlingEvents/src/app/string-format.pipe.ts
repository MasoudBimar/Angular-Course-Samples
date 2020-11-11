import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringFormat'
})
export class StringFormatPipe implements PipeTransform {

  transform(value: string, seperator: string): string {
    let result = value.split(' ').join(seperator);
    return result;
  }

}
