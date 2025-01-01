import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunroomComponent } from './sunroom.component';

describe('SunroomComponent', () => {
  let component: SunroomComponent;
  let fixture: ComponentFixture<SunroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SunroomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SunroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
