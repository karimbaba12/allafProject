import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsoHereComponent } from './also-here.component';

describe('AlsoHereComponent', () => {
  let component: AlsoHereComponent;
  let fixture: ComponentFixture<AlsoHereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlsoHereComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlsoHereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
