import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PremiumCalculatorComponent } from './premium-calculator.component';
import { FormsModule } from '@angular/forms';

describe('PremiumCalculatorComponent', () => {
  let component: PremiumCalculatorComponent;
  let fixture: ComponentFixture<PremiumCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PremiumCalculatorComponent],
      imports : [FormsModule]
    })
    .compileComponents(); 
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display main title', async(() => {
    const titleText = fixture.nativeElement.querySelector('h1').textContent;
    expect(titleText).toEqual('Monthly Death Premium Calculator');
  }));

  it('should display a header title', async(() => {
    const titleText = fixture.nativeElement.querySelector('h3').textContent;
    expect(titleText).toEqual('Member Profile');
  }));

  
});
