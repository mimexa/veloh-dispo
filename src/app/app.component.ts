import { Component, OnInit } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import 'rxjs/add/operator/map';
import { MIN_LAT, MAX_LAT, MIN_LNG, MAX_LNG } from './constants';

declare var navigator;
declare var google;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: String = 'My first AGM project';
  lat: Number = 49.6099044;
  lng: Number = 6.1305187;
  isBluePointVisible: boolean = false;
  bluePoint: any = {
    url: 'assets/blue-point.png',
    scaledSize: {
      height: 10,
      width: 10
    }
  }
  stations: Object = [];
  decauxUrl: String = 'https://api.jcdecaux.com/vls/v1/stations';

  constructor(private restangular: Restangular) { 
    console.log('Hi! If you like this website, please contribute on https://github.com/mimexa/veloh-dispo')
  }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(position => {
      const latitude: Number = position.coords.latitude;
      const longitude: Number = position.coords.longitude;
      if (latitude > MIN_LAT && latitude < MAX_LAT && longitude > MIN_LNG && latitude < MAX_LAT) {
        this.isBluePointVisible = true;
        this.lat = latitude;
        this.lng = longitude;
      }
    });
    this.restangular.allUrl('googlers', 'https://api.jcdecaux.com/vls/v1/stations').getList({
      contract: 'Luxembourg',
      apiKey: '1bf29d79e7030509767aff7fa3719ce590f922ac'
    }).toPromise().then(response => {
      this.stations = response;
    });
  }
}
