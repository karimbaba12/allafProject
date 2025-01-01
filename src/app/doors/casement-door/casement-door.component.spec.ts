import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasementDoorComponent } from './casement-door.component';

describe('CasementDoorComponent', () => {
  let component: CasementDoorComponent;
  let fixture: ComponentFixture<CasementDoorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasementDoorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasementDoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
