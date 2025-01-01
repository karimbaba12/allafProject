import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasementWindow2Component } from './casement-window2.component';

describe('CasementWindow2Component', () => {
  let component: CasementWindow2Component;
  let fixture: ComponentFixture<CasementWindow2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasementWindow2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CasementWindow2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
