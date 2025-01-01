import { Component, OnInit } from '@angular/core';
import { ImgSliderComponent } from "../img-slider/img-slider.component";
import { imgNickname } from '../../service/imgNickName';
import { ImgAlbumComponent } from "../img-album/img-album.component";
import { AlsoHereComponent } from "../also-here/also-here.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ImgSliderComponent, ImgAlbumComponent, AlsoHereComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {
  imagesWindow: any[] = [];
  imagesDoor: any[] = [];

  imgPath1 = imgNickname['home9'];
  imgPath2 = imgNickname['home11'];
  imgPath3 = imgNickname['home14'];


  ngOnInit() {
    const imgAlbum1 = imgNickname['home10']; 
    const imgAlbum2 = imgNickname['home11']; 
    const imgAlbum3 = imgNickname['home12']; 
    const imgAlbum4 = imgNickname['home13']; 

    this.imagesWindow = [
      { src: imgAlbum1, alt: 'Album Image 1', text: 'Casment Window' },
      { src: imgAlbum2, alt: 'Album Image 1', text: 'Sliding Window' },
      { src: imgAlbum3, alt: 'Album Image 1', text: 'Lift Up Winow' },
      { src: imgAlbum4, alt: 'Album Image 1', text: 'Parallel Window' }
    ];
    
    const imgAlbum5 = imgNickname['home14']; 
    const imgAlbum6 = imgNickname['home15']; 
    const imgAlbum8 = imgNickname['home17']; 
    const imgAlbum7 = imgNickname['home18']; 

    this.imagesDoor = [
      { src: imgAlbum6, alt: 'Album Image 1', text: 'Conceal Track Sliding System' },
      { src: imgAlbum5, alt: 'Album Image 1', text: 'Bi Folding System' },
      { src: imgAlbum7, alt: 'Album Image 1', text: 'Sliding System' },
      { src: imgAlbum8, alt: 'Album Image 1', text: 'Casment System' }
    ];
  }
}