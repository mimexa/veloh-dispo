import { Pipe, PipeTransform } from '@angular/core';
import { ASSETS, CLOSED, OK, FREE, FULL } from './../constants';

@Pipe({
  name: 'iconUrl'
})
export class IconUrlPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let iconUrl = '';
    if (value.status === 'OPEN') {
      if (value.available_bike_stands == 0) {
        iconUrl = FULL;
      } else if (value.available_bikes == 0) {
        iconUrl = FREE;
      } else {
        iconUrl = OK;
      }
    } else {
      iconUrl = CLOSED;
    }
    return {
      url: ASSETS + iconUrl,
      scaledSize: {
        height: 17,
        width: 10
      }
    };
  }

}
