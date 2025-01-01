import { Component, Input } from '@angular/core';
import { ImgSliderComponent } from "../../img-slider/img-slider.component";
import { SmallImgSliderComponent } from "../../small-img-slider/small-img-slider.component";
import { imgNickname } from '../../../service/imgNickName';

@Component({
  selector: 'app-sliding-window',
  standalone: true,
  imports: [ImgSliderComponent, SmallImgSliderComponent],
  templateUrl: './sliding-window.component.html',
  styleUrl: './sliding-window.component.scss'
})
export class SlidingWindowComponent {
  imgPath1 = imgNickname['slidingWindow9'];
  imgPath2 = imgNickname['slidingWindow10'];
  imgPath3 = imgNickname['slidingWindow11'];
  imgPath4 = imgNickname['slidingWindow12'];
  imgPath5 = imgNickname['slidingWindow13'];
  imgPath6 = imgNickname['slidingWindow14'];
  imgPath7 = imgNickname['slidingWindow15'];
  imgPath8 = imgNickname['slidingWindow16'];
  imgPath9 = imgNickname['slidingWindow17'];
  imgPath10 = imgNickname['slidingWindow18'];
  imgPath11 = imgNickname['slidingWindow19'];
  imgPath12 = imgNickname['slidingWindow20'];
  imgPath13 = imgNickname['slidingWindow21'];
  imgPath14 = imgNickname['slidingWindow22'];

}
