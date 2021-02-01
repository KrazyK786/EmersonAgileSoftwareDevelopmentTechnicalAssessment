import { Component, OnInit } from '@angular/core';
import {CurrentWeatherService} from '../../services/current-weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchData: string;
  searchType: string;

  constructor(
    private currentWeatherService: CurrentWeatherService
  ) { }

  ngOnInit(): void {
  }

  submitUserData(): void {
    this.currentWeatherService.getWeather(this.searchType, this.searchData).subscribe(res => {
      console.log(res);
    });
    // console.log(`search data: ${this.searchData}, \n search type: ${this.searchType}`);
  }

}
