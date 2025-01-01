import { Component } from '@angular/core';
import { ImgSliderComponent } from "../../img-slider/img-slider.component";
import { SmallImgSliderComponent } from "../../small-img-slider/small-img-slider.component";
import { imgNickname } from '../../../service/imgNickName';

@Component({
  selector: 'app-slimline-lift-slide-door',
  standalone: true,
  imports: [ImgSliderComponent, SmallImgSliderComponent],
  templateUrl: './slimline-lift-slide-door.component.html',
  styleUrl: './slimline-lift-slide-door.component.scss'
})
export class SlimlineLiftSlideDoorComponent {
  imgPath1 = imgNickname['slimlineLiftAndSlideDoor9'];
  imgPath2 = imgNickname['slimlineLiftAndSlideDoor10'];
  imgPath3 = imgNickname['slimlineLiftAndSlideDoor12'];
  imgPath4 = imgNickname['slimlineLiftAndSlideDoor13'];
  imgPath5 = imgNickname['slimlineLiftAndSlideDoor14'];
  imgPath6 = imgNickname['slimlineLiftAndSlideDoor15'];
  imgPath7 = imgNickname['slimlineLiftAndSlideDoor16'];
  imgPath8 = imgNickname['slimlineLiftAndSlideDoor17'];
  imgPath9 = imgNickname['slimlineLiftAndSlideDoor18'];
  imgPath10 = imgNickname['slimlineLiftAndSlideDoor19'];
  imgPath11 = imgNickname['slimlineLiftAndSlideDoor3'];
  imgPath12 = imgNickname['slimlineLiftAndSlideDoor22'];
  imgPath13 = imgNickname['slimlineLiftAndSlideDoor23'];
  imgPath14 = imgNickname['slimlineLiftAndSlideDoor24'];
  imgPath15 = imgNickname['slimlineLiftAndSlideDoor25'];

}
