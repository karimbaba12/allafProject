import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgAlbumComponent } from './img-album.component';

describe('ImgAlbumComponent', () => {
  let component: ImgAlbumComponent;
  let fixture: ComponentFixture<ImgAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgAlbumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
