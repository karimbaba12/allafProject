import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallImgSliderComponent } from './small-img-slider.component';

describe('SmallImgSliderComponent', () => {
  let component: SmallImgSliderComponent;
  let fixture: ComponentFixture<SmallImgSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallImgSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallImgSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
