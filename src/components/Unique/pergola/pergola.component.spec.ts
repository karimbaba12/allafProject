import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PergolaComponent } from './pergola.component';

describe('PergolaComponent', () => {
  let component: PergolaComponent;
  let fixture: ComponentFixture<PergolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PergolaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PergolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
