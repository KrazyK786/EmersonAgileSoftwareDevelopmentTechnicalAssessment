import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchData: string;
  searchType: string;

  constructor() { }

  ngOnInit(): void {
  }

  submitUserData(): void {
    console.log(`search data: ${this.searchData}, \n search type: ${this.searchType}`);
  }

}
