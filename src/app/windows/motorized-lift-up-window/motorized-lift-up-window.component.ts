import { Component, Input } from '@angular/core';
import { ImgSliderComponent } from "../../img-slider/img-slider.component";
import { SmallImgSliderComponent } from "../../small-img-slider/small-img-slider.component";
import { imgNickname } from '../../../service/imgNickName';

@Component({
  selector: 'app-motorized-lift-up-window',
  standalone: true,
  imports: [ImgSliderComponent, SmallImgSliderComponent],
  templateUrl: './motorized-lift-up-window.component.html',
  styleUrl: './motorized-lift-up-window.component.scss'
})
export class MotorizedLiftUpWindowComponent {
  imgPath1 = imgNickname['motorizedLiftUpWindow9'];
  imgPath2 = imgNickname['motorizedLiftUpWindow10'];
  imgPath22 = imgNickname['motorizedLiftUpWindow11'];
  imgPath3 = imgNickname['motorizedLiftUpWindow12'];
  imgPath4 = imgNickname['motorizedLiftUpWindow13'];
  imgPath5 = imgNickname['motorizedLiftUpWindow14'];
  imgPath6 = imgNickname['motorizedLiftUpWindow15'];
  imgPath7 = imgNickname['motorizedLiftUpWindow16'];
  imgPath8 = imgNickname['motorizedLiftUpWindow17'];
  imgPath9 = imgNickname['motorizedLiftUpWindow18'];
  imgPath10 = imgNickname['motorizedLiftUpWindow19'];
  imgPath11 = imgNickname['motorizedLiftUpWindow20'];
  imgPath12 = imgNickname['motorizedLiftUpWindow21'];
  imgPath13 = imgNickname['motorizedLiftUpWindow23'];
  imgPath14 = imgNickname['motorizedLiftUpWindow24'];
}
