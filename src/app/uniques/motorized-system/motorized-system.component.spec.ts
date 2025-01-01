import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorizedSystemComponent } from './motorized-system.component';

describe('MotorizedSystemComponent', () => {
  let component: MotorizedSystemComponent;
  let fixture: ComponentFixture<MotorizedSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotorizedSystemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorizedSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
