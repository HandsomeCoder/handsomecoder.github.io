import { Pipe, PipeTransform } from '@angular/core';
import { DateTime } from 'luxon';
@Pipe({
  name: 'datetime'
})
export class DatetimePipe implements PipeTransform {

  transform(value: string, ...args: string[]): unknown {

    if (value == undefined) { 
      return null
    }

    return DateTime.fromFormat(value, 'MM/dd/yyyy')
      .setLocale('en')
      .toFormat(args[0])
      .toString();
  }

}
