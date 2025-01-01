import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiFoldingDoorsComponent } from './bi-folding-doors.component';

describe('BiFoldingDoorsComponent', () => {
  let component: BiFoldingDoorsComponent;
  let fixture: ComponentFixture<BiFoldingDoorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiFoldingDoorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BiFoldingDoorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
