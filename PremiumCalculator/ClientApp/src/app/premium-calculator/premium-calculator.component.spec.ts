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


});
