import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlimlineSlidingDoorsComponent } from './slimline-sliding-doors.component';

describe('SlimlineSlidingDoorsComponent', () => {
  let component: SlimlineSlidingDoorsComponent;
  let fixture: ComponentFixture<SlimlineSlidingDoorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlimlineSlidingDoorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlimlineSlidingDoorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
