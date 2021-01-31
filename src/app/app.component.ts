import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmersonAgileSoftwareDevelopmentTechnicalAssessment';
  searchData: string;
  searchType: string;

  submitUserData(): void {
    console.log(`search data: ${this.searchData}, \n search type: ${this.searchType}`);
  }
}
