import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcealTrackSlimlineSlidingDoorComponent } from './conceal-track-slimline-sliding-door.component';

describe('ConcealTrackSlimlineSlidingDoorComponent', () => {
  let component: ConcealTrackSlimlineSlidingDoorComponent;
  let fixture: ComponentFixture<ConcealTrackSlimlineSlidingDoorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConcealTrackSlimlineSlidingDoorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcealTrackSlimlineSlidingDoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
