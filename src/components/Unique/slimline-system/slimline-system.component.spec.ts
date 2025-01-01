import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlimlineSystemComponent } from './slimline-system.component';

describe('SlimlineSystemComponent', () => {
  let component: SlimlineSystemComponent;
  let fixture: ComponentFixture<SlimlineSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlimlineSystemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlimlineSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
