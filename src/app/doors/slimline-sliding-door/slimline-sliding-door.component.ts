import { Component } from '@angular/core';
import { ImgSliderComponent } from "../../img-slider/img-slider.component";
import { SmallImgSliderComponent } from "../../small-img-slider/small-img-slider.component";
import { imgNickname } from '../../../service/imgNickName';

@Component({
  selector: 'app-slimline-sliding-door',
  standalone: true,
  imports: [ImgSliderComponent, SmallImgSliderComponent],
  templateUrl: './slimline-sliding-door.component.html',
  styleUrl: './slimline-sliding-door.component.scss'
})
export class SlimlineSlidingDoorComponent {
  imgPath1 = imgNickname['panoramicSlidingDoor10'];
  imgPath2 = imgNickname['panoramicSlidingDoor11'];
  imgPath22 =  imgNickname['panoramicSlidingDoor12'];
  imgPath222 =  imgNickname['panoramicSlidingDoor13'];
  imgPath2222=  imgNickname['panoramicSlidingDoor14'];

  imgPath3 = imgNickname['panoramicSlidingDoor15'];
  imgPath4 = imgNickname['panoramicSlidingDoor16'];
  imgPath5 = imgNickname['panoramicSlidingDoor17'];
  imgPath6 = imgNickname['panoramicSlidingDoor18'];
  imgPath7 = imgNickname['panoramicSlidingDoor19'];
  imgPath8 = imgNickname['panoramicSlidingDoor20'];
  imgPath9 = imgNickname['panoramicSlidingDoor21'];
  imgPath10 = imgNickname['panoramicSlidingDoor22'];
  imgPath11 = imgNickname['panoramicSlidingDoor23'];
  imgPath12 = imgNickname['panoramicSlidingDoor24'];
  imgPath13 = imgNickname['panoramicSlidingDoor25'];
  imgPath14 = imgNickname['panoramicSlidingDoor26'];
  imgPath15 = imgNickname['panoramicSlidingDoor25'];
  imgPath16 = imgNickname['panoramicSlidingDoor26'];

}
