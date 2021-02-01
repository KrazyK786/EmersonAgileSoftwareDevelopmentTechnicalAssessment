import { Component, OnInit } from '@angular/core';
import {CurrentWeatherService} from '../../services/current-weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  results: any;

  constructor(
    private currentWeatherService: CurrentWeatherService
  ) { }

  ngOnInit(): void {
  }

  // updateResults(searchType: string, searchData: string){
  updateResults(searchType: string, searchData: string){
    this.currentWeatherService.getWeather(searchType, searchData).subscribe(res => {
      // console.log(res);
      this.results = res;
    });
  }

}
