import { Component } from '@angular/core';
import { SmallImgSliderComponent } from "../../small-img-slider/small-img-slider.component";
import { ImgSliderComponent } from "../../img-slider/img-slider.component";
import { imgNickname } from '../../../service/imgNickName';

@Component({
  selector: 'app-motorized-system',
  standalone: true,
  imports: [SmallImgSliderComponent, ImgSliderComponent],
  templateUrl: './motorized-system.component.html',
  styleUrl: './motorized-system.component.scss'
})
export class MotorizedSystemComponent {
  imgPath1 = imgNickname['motorizedRollingFlymesh10'];
  imgPath2 = imgNickname['motorizedRollingFlymesh11'];
  imgPath3 = imgNickname['motorizedRollingFlymesh12'];
  imgPath4 = imgNickname['motorizedRollingFlymesh13'];
  imgPath5 = imgNickname['motorizedRollingFlymesh14'];
  imgPath6 = imgNickname['motorizedRollingFlymesh15'];
  imgPath7 = imgNickname['motorizedRollingFlymesh16'];
  imgPath8 = imgNickname['motorizedRollingFlymesh17'];
  imgPath9 = imgNickname['motorizedRollingFlymesh18'];
  imgPath10 = imgNickname['motorizedRollingFlymesh19'];
  imgPath11 = imgNickname['motorizedRollingFlymesh20'];
  imgPath12 = imgNickname['motorizedRollingFlymesh21'];
  imgPath13= imgNickname['motorizedRollingFlymesh22'];
  imgPath14 = imgNickname['motorizedRollingFlymesh23'];
  imgPath15 = imgNickname['motorizedRollingFlymesh24'];
  imgPath16 = imgNickname['motorizedRollingFlymesh25'];
}
