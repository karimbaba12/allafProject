import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcealTrackDoorsComponent } from './conceal-track-doors.component';

describe('ConcealTrackDoorsComponent', () => {
  let component: ConcealTrackDoorsComponent;
  let fixture: ComponentFixture<ConcealTrackDoorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConcealTrackDoorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConcealTrackDoorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
