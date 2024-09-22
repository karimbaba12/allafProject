import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorizedWindowComponent } from './motorized-window.component';

describe('MotorizedWindowComponent', () => {
  let component: MotorizedWindowComponent;
  let fixture: ComponentFixture<MotorizedWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotorizedWindowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MotorizedWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
