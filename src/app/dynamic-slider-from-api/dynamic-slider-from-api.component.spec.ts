import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicSliderFromApiComponent } from './dynamic-slider-from-api.component';

describe('DynamicSliderFromApiComponent', () => {
  let component: DynamicSliderFromApiComponent;
  let fixture: ComponentFixture<DynamicSliderFromApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicSliderFromApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicSliderFromApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
