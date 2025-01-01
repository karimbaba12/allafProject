import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasementDoorsComponent } from './casement-doors.component';

describe('CasementDoorsComponent', () => {
  let component: CasementDoorsComponent;
  let fixture: ComponentFixture<CasementDoorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasementDoorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CasementDoorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
