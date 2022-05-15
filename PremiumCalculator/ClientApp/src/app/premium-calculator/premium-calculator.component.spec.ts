import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PremiumCalculatorComponent } from './premium-calculator.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('PremiumCalculatorComponent', () => {
  let component: PremiumCalculatorComponent;
  let fixture: ComponentFixture<PremiumCalculatorComponent>;
  const baseUrl = "http://localhost:44401/";

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PremiumCalculatorComponent],
      imports: [RouterTestingModule,
        HttpClientTestingModule,
        FormsModule],
      providers: [{ provide: 'BASE_URL', useValue: baseUrl }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumCalculatorComponent);
    component = fixture.componentInstance;
    component.occupations.push({ name: "Cleaner", rating: "Light Manual" });
    component.occupations.push({ name: "Doctor", rating: "Professional" });
    component.occupations.push({ name: "Author", rating: "White Collar" });
    component.occupations.push({ name: "Farmer", rating: "Heavy Manual" });
    component.occupations.push({ name: "Mechanic", rating: "Heavy Manual" });
    component.occupations.push({ name: "Florist", rating: "Light Manual" });

    component.occupationFactor = 1.0;
    fixture.detectChanges();   

  });

  it('should display main title', () => {
    const titleText = fixture.nativeElement.querySelector('h3').textContent;
    expect(titleText).toEqual('Monthly Death Premium Calculator');
  });

  it('should display a header title', () => {
    const titleText = fixture.nativeElement.querySelector('h5').textContent;
    expect(titleText).toEqual('Member Profile');
  });

  it('check user name value to be empty in initial', () => {
    const nameText = fixture.nativeElement.querySelector('#txtName').textContent;
    expect(nameText).toEqual('');
  });
  it('check user name is required field', () => {
    const nameField: HTMLInputElement = fixture.nativeElement.querySelector('#txtName');
    nameField.value = '';
    nameField.dispatchEvent(new Event('#txtName'))
    expect(nameField.checkValidity()).toBeFalse();
  });
  it('check user name should accept only alphabets', () => {
    const nameField: HTMLInputElement = fixture.nativeElement.querySelector('#txtName');
    nameField.value = '3232';
    nameField.dispatchEvent(new Event('#txtName'))
    expect(nameField.checkValidity()).toBeFalse();
  });
  it('check date of birth is required field', () => {
    const dobField: HTMLInputElement = fixture.nativeElement.querySelector('#txtDOB');
    dobField.value = '';
    dobField.dispatchEvent(new Event('#txtDOB'))
    expect(dobField.checkValidity()).toBeFalse();
  });
  it('check occupation is required field', () => {
    const occupationField: HTMLInputElement = fixture.nativeElement.querySelector('#sltOccupation');
    occupationField.value = '';
    occupationField.dispatchEvent(new Event('#sltOccupation'))
    expect(occupationField.checkValidity()).toBeFalse();
  });
  it('check death sum-insured amount is required field', () => {
    const sumInsuredField: HTMLInputElement = fixture.nativeElement.querySelector('#txtSumInsured');
    sumInsuredField.value = '';
    sumInsuredField.dispatchEvent(new Event('#txtSumInsured'))
    expect(sumInsuredField.checkValidity()).toBeFalse();
  });
  it('check death sum-insured amount accepts only numbers', () => {
    const sumInsuredField: HTMLInputElement = fixture.nativeElement.querySelector('#txtSumInsured');
    sumInsuredField.value = 'det';
    sumInsuredField.dispatchEvent(new Event('#txtSumInsured'))
    expect(sumInsuredField.checkValidity()).toBeFalse();
  });
  it('should get monthly premium amount when calculate button is clicked and all the input field is valid', () => {
  
    const nameField: HTMLInputElement = fixture.nativeElement.querySelector('#txtName');
    const dobField: HTMLInputElement = fixture.nativeElement.querySelector('#txtDOB');
    const ageField: HTMLInputElement = fixture.nativeElement.querySelector('#txtAge');

    const occupationField: HTMLInputElement = fixture.nativeElement.querySelector('#sltOccupation');
    const sumInsuredField: HTMLInputElement = fixture.nativeElement.querySelector('#txtSumInsured');
    const calculatePremiumButton: HTMLInputElement = fixture.nativeElement.querySelector('#btnCalculatePremium');
    const premiumAmountField: HTMLInputElement = fixture.nativeElement.querySelector('#stgPremiumAmount');    

    nameField.value = 'Vinay';
    dobField.value = '1990-01-01';
    ageField.value = '32';
    occupationField.value = 'Professional'; //factor = 1.0
    sumInsuredField.value = '120000';

    nameField.dispatchEvent(new Event('#txtName'))
    dobField.dispatchEvent(new Event('#txtDOB'))
    ageField.dispatchEvent(new Event('#txtAge'))
    occupationField.dispatchEvent(new Event('change'))
    sumInsuredField.dispatchEvent(new Event('#txtSumInsured'))

    component.sumInsuredAmount = Number.parseFloat(sumInsuredField.value);
    component.showAge = Number.parseInt(ageField.value);

    calculatePremiumButton.click();
    premiumAmountField.dispatchEvent(new Event('#stgPremiumAmount'))
    fixture.detectChanges();
    const premiumAmountExpected: Number = (Number.parseFloat(sumInsuredField.value) * 1.0 * Number.parseFloat(ageField.value)) / 1000 * 12;
    expect(premiumAmountField.textContent).toEqual(premiumAmountExpected.toString());
  });


});
