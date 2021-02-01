import {Component, Input, OnInit} from '@angular/core';
import {CurrentWeatherService} from '../../services/current-weather.service';
import {APIresponse} from '../../models/APIresponse';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  @Input() results: APIresponse;

  constructor(
    private currentWeatherService: CurrentWeatherService
  ) { }

  ngOnInit(): void {
  }

}
