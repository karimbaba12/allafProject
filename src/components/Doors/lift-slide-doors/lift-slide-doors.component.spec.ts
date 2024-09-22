import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiftSlideDoorsComponent } from './lift-slide-doors.component';

describe('LiftSlideDoorsComponent', () => {
  let component: LiftSlideDoorsComponent;
  let fixture: ComponentFixture<LiftSlideDoorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiftSlideDoorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LiftSlideDoorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
