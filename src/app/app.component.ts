import { Component, OnInit } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import 'rxjs/add/operator/map';
import { MIN_LAT, MAX_LAT, MIN_LNG, MAX_LNG } from './constants';
import { GoogleMapsAPIWrapper } from '@agm/core/services';

declare var navigator;
declare var distance;

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
  stations: Array<Object> = [];
  closestStation = {};
  decauxUrl: String = 'https://api.jcdecaux.com/vls/v1/stations';

  constructor(private restangular: Restangular, private googlemaps: GoogleMapsAPIWrapper) {
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
        this.openClosestStation();
      }
    });
    this.restangular.allUrl('googlers', 'https://api.jcdecaux.com/vls/v1/stations').getList({
      contract: 'Luxembourg',
      apiKey: '1bf29d79e7030509767aff7fa3719ce590f922ac'
    }).toPromise().then(response => {
      this.stations = response;
      this.openClosestStation();
    });
  }

  openClosestStation() {
    if (this.isBluePointVisible && this.stations.length > 0) {
      let minDist = 1000;
      this.stations.forEach((station: any) => {
        let distance = this.dist(station.position.lat, station.position.lng, this.lat, this.lng);
        station.distance = distance;
        if (distance < minDist) {
          minDist = distance;
          this.closestStation = station;
        }
      })
    }
  }

  dist(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2 - lat1);  // deg2rad below
    var dLon = this.deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2)
      ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d * 1000;
  }

  deg2rad(deg) {
    return deg * (Math.PI / 180);
  }
}
