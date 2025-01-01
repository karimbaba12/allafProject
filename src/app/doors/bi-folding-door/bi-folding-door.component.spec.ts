import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiFoldingDoorComponent } from './bi-folding-door.component';

describe('BiFoldingDoorComponent', () => {
  let component: BiFoldingDoorComponent;
  let fixture: ComponentFixture<BiFoldingDoorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiFoldingDoorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiFoldingDoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
