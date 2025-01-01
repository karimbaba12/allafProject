import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BliindsBetweenGlassComponent } from './bliinds-between-glass.component';

describe('BliindsBetweenGlassComponent', () => {
  let component: BliindsBetweenGlassComponent;
  let fixture: ComponentFixture<BliindsBetweenGlassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BliindsBetweenGlassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BliindsBetweenGlassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
