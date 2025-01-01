import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { imgNickname } from '../../service/imgNickName';

@Component({
  selector: 'app-img-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './img-slider.component.html',
  styleUrl: './img-slider.component.scss'
})

export class ImgSliderComponent {
  @Input() images: string[] = [];
  imgNickname = imgNickname;

}
