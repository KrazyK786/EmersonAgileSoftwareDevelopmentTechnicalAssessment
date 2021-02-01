/* tslint:disable:no-trailing-whitespace */
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CurrentWeatherService {
  baseUrl: string = 'http://api.openweathermap.org/data/2.5/forecast?';
  // TODO: should this be hardcoded?
  appid: string = 'cf002751564a4c78f5f7ed479f1b9ba3';
  // q: string;
  // zip: string;
  // countryCode: string;
  // lat: string;
  // lon: string;
  // searchType: string;

  constructor(
    private http: HttpClient
  ) { }

  // Get weather
  getWeather(searchType: string, searchTerm: string): Observable<any>{
    // Init query param variables
    let q: string = '';
    let zip: string = '';
    let lat: string = '';
    let lon: string = '';

    // TODO: move to class for consistency between components and services
    // set query param variables
    switch (searchType){
      case 'city':
        q = searchTerm;
        break;
      case 'zip':
        zip = searchTerm;
        break;
      case 'coordinates':
        let coordinateArray: string[] = searchTerm.split(',');
        lat = coordinateArray[0];
        lon = coordinateArray[1];
    }

    // if (searchType === 'city'){
    //   this.q = searchTerm;
    // } else if (searchType === 'zip'){
    //
    // } else {
    //
    // }


    return this.http.get<any>(`${this.baseUrl}zip=${zip}&lat=${lat}&lon=${lon}&q=${q}&appid=${this.appid}`);
  }
}
