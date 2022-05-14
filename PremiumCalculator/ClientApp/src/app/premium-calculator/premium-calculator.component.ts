import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './premium-calculator.html',
})
export class PremiumCalculatorComponent {
  public showAge!: number;
  premiumAmount = 0;
  sumInsuredAmount = 0;
  selectedOccupation: number = 0;
  occupations!: OccupationList[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<OccupationList[]>(baseUrl + 'occupationlist').subscribe(result => {
      this.occupations = result;
    }, error => console.error(error));
  }

  calculateAge(event: any) {
    console.log(event.target.value);
    if (event.target.value) {
      const convertAge = new Date(event.target.value);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      this.showAge = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
    }   
  }
  //event handler for the select element's change event
  selectedOccupationChange(event: any) {
    //update the ui
    this.selectedOccupation = event.target.value;

  }
  public calculatePremium() {
    //Death Premium = (Death Cover amount * Occupation Rating Factor * Age) /1000 * 12
    this.premiumAmount = (this.sumInsuredAmount * this.selectedOccupation * this.showAge) / 1000 * 12;
  }
}
interface OccupationList {
  name: string;
  rating: string;
}
