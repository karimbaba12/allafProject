import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallelWindowComponent } from './parallel-window.component';

describe('ParallelWindowComponent', () => {
  let component: ParallelWindowComponent;
  let fixture: ComponentFixture<ParallelWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParallelWindowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParallelWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
