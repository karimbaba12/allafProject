import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlindsBetweenGlassComponent } from './blinds-between-glass.component';

describe('BlindsBetweenGlassComponent', () => {
  let component: BlindsBetweenGlassComponent;
  let fixture: ComponentFixture<BlindsBetweenGlassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlindsBetweenGlassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlindsBetweenGlassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
