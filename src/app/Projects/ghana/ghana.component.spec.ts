import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhanaComponent } from './ghana.component';

describe('GhanaComponent', () => {
  let component: GhanaComponent;
  let fixture: ComponentFixture<GhanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GhanaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GhanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
