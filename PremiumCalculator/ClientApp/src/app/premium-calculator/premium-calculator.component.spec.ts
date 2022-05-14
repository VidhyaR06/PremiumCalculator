import { async, PremiumCalculatorFixture, TestBed } from '@angular/core/testing';

import { PremiumCalculatorComponent } from './premium-calculator.component';

describe('PremiumCalculatorComponent', () => {
  let fixture: PremiumCalculatorFixture<PremiumCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PremiumCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumCalculatorComponent);
    fixture.detectChanges();
  });

  it('should display main title', async(() => {
    const titleText = fixture.nativeElement.querySelector('h1').textContent;
    expect(titleText).toEqual('Premium Calculator');
  }));

  it('should display a header title', async(() => {
    const titleText = fixture.nativeElement.querySelector('h3').textContent;
    expect(titleText).toEqual('Member Profile');
  }));

  
});
