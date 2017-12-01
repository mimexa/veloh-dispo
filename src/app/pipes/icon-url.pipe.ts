import { Pipe, PipeTransform } from '@angular/core';
import { ASSETS, CLOSED, OK, EMPTY, ALMOST_EMPTY, ALMOST_FULL, FULL } from './../constants';

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
        iconUrl = EMPTY;
      } else if (value.available_bikes < 3) {
        iconUrl = ALMOST_EMPTY;
      } else if (value.available_bike_stands < 3) {
        iconUrl = ALMOST_FULL;
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
