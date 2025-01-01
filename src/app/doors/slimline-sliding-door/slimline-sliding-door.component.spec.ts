import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlimlineSlidingDoorComponent } from './slimline-sliding-door.component';

describe('SlimlineSlidingDoorComponent', () => {
  let component: SlimlineSlidingDoorComponent;
  let fixture: ComponentFixture<SlimlineSlidingDoorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlimlineSlidingDoorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlimlineSlidingDoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
