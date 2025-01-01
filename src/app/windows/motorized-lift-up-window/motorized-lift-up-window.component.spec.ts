import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorizedLiftUpWindowComponent } from './motorized-lift-up-window.component';

describe('MotorizedLiftUpWindowComponent', () => {
  let component: MotorizedLiftUpWindowComponent;
  let fixture: ComponentFixture<MotorizedLiftUpWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotorizedLiftUpWindowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorizedLiftUpWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
