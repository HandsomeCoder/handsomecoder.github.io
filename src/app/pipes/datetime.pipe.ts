import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'datetime'
})
export class DatetimePipe implements PipeTransform {

  transform(value: string, ...args: string[]): unknown {
    return value == undefined ? null : moment(value).format(args[0]);
  }

}
