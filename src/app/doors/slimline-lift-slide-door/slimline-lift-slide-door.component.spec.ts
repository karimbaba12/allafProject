import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlimlineLiftSlideDoorComponent } from './slimline-lift-slide-door.component';

describe('SlimlineLiftSlideDoorComponent', () => {
  let component: SlimlineLiftSlideDoorComponent;
  let fixture: ComponentFixture<SlimlineLiftSlideDoorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlimlineLiftSlideDoorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlimlineLiftSlideDoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
