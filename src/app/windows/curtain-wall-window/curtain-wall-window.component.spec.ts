import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurtainWallWindowComponent } from './curtain-wall-window.component';

describe('CurtainWallWindowComponent', () => {
  let component: CurtainWallWindowComponent;
  let fixture: ComponentFixture<CurtainWallWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurtainWallWindowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurtainWallWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
