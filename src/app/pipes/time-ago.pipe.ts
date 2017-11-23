import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let miliseconds: number = Math.abs(new Date().getTime() - new Date(value).getTime());
    let seconds: number = miliseconds / 1000;
    let minutes: number = seconds / 60;
    let timeAgo: number = Math.ceil(minutes);
    let span: string = '';
    if (timeAgo == 0) {
      span = 'Less than a minute';
    } else if (timeAgo == 1) {
      span = 'One minute ago';
    } else if (timeAgo < 30) {
      span = timeAgo + ' minutes ago';
    } else if (timeAgo < 60) {
      span = 'More than half an hour';
    } else {
      span = 'More than an hour';
    }
    return span;
  }

}
