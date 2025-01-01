import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasementWindowComponent } from './casement-window.component';

describe('CasementWindowComponent', () => {
  let component: CasementWindowComponent;
  let fixture: ComponentFixture<CasementWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasementWindowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasementWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
