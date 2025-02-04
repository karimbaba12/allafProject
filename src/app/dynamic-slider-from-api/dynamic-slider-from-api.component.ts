import { Component, Input, OnInit } from '@angular/core';
import { imgNickname } from '../../service/imgNickName';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-slider-from-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dynamic-slider-from-api.component.html',
  styleUrl: './dynamic-slider-from-api.component.scss',
})
export class DynamicSliderFromApiComponent implements OnInit {
  @Input() images: string[] = [];
  @Input() imgNickname = imgNickname;
  @Input() carouselId: string = '';
  ngOnInit(): void {
    console.log('Received images in SmallImgSlider:', this.images);
    console.log('Carousel ID:', this.carouselId);
  }
  onImageError(event: any) {
    event.target.src = 'assets/no-image.jpg'; // Replace with a valid placeholder image
  }
  
}
