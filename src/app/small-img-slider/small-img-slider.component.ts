import { Component, Input } from '@angular/core';
import { imgNickname } from '../../service/imgNickName';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-small-img-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './small-img-slider.component.html',
  styleUrl: './small-img-slider.component.scss'
})
export class SmallImgSliderComponent {
  @Input() images: string[] = [];
  imgNickname = imgNickname;
}
