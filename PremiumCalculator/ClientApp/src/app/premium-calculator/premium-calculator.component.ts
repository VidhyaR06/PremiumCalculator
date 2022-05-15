import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './premium-calculator.html'
})
export class PremiumCalculatorComponent {
  showAge!: number;
  premiumAmount: number = 0;
  sumInsuredAmount!: number;
  selectedOccupation: string = '';
  occupationFactor: any;
  occupations: OccupationList[] = [];
  baseServiceUrl: string = '';
  today: Date = new Date();
  currentYear: number = this.today.getFullYear();
  currentMonth: number = this.today.getMonth();
  currentDay: number = this.today.getDate();
  maxDate: string = new Date(this.currentYear, this.currentMonth, this.currentDay).toLocaleDateString();

  constructor(public http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<OccupationList[]>(baseUrl + 'occupationlist').subscribe(result => {
      this.occupations = result;
    }, error => console.error(error));
    this.baseServiceUrl = baseUrl;
  }

  calculateAge(event: any) {
    if (event.target.value) {
      const convertAge = new Date(event.target.value);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      this.showAge = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
      this.calculatePremium();
    }
  }
  //event handler for the select element's change event
  selectedOccupationChange(event: any) {
    this.selectedOccupation = event.target.value;
    const url = this.baseServiceUrl + 'occupationlist/getOccupationFactor/' + this.selectedOccupation;
    this.http.get(url).
      subscribe(result => {
        this.occupationFactor = result;
        this.occupationFactor = Number(this.occupationFactor);
        if (this.occupationFactor != NaN) {
          this.calculatePremium();
        }
      }, error => console.error(error));

  }
  public calculatePremium() {
    //Death Premium = (Death Cover amount * Occupation Rating Factor * Age) /1000 * 12
    if (this.sumInsuredAmount != undefined && this.showAge != undefined && this.occupationFactor != undefined) {
      this.premiumAmount = (this.sumInsuredAmount * this.occupationFactor * this.showAge) / 1000 * 12;
      this.premiumAmount = parseFloat(this.premiumAmount.toFixed(2));
    }
  }
}
interface OccupationList {
  name: string;
  rating: string;
}



