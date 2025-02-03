import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KuwaitComponent } from './kuwait.component';

describe('KuwaitComponent', () => {
  let component: KuwaitComponent;
  let fixture: ComponentFixture<KuwaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KuwaitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KuwaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
