﻿import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

//this provider helps to calling the api

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class WeatherProvider {
    apiKey = '0893548ee9a8ae27';
    url;


  constructor(public http: Http) {
      console.log('Hello WeatherProvider Provider');
      this.url = 'http://api.wunderground.com/api/'+this.apiKey+'/conditions/q';
  }

  getWeather(city,state)
  {
      return this.http.get(this.url + '/' + state + '/' + city + '.json')
          .map(res => res.json());
  }

}
