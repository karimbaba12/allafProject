import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LebanonComponent } from './lebanon.component';

describe('LebanonComponent', () => {
  let component: LebanonComponent;
  let fixture: ComponentFixture<LebanonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LebanonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LebanonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
