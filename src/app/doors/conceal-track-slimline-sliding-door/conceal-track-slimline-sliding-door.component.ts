import { Component } from '@angular/core';
import { imgNickname } from '../../../service/imgNickName';
import { SmallImgSliderComponent } from "../../small-img-slider/small-img-slider.component";
import { ImgSliderComponent } from "../../img-slider/img-slider.component";

@Component({
  selector: 'app-conceal-track-slimline-sliding-door',
  standalone: true,
  imports: [SmallImgSliderComponent, ImgSliderComponent],
  templateUrl: './conceal-track-slimline-sliding-door.component.html',
  styleUrl: './conceal-track-slimline-sliding-door.component.scss'
})
export class ConcealTrackSlimlineSlidingDoorComponent {
  imgPath1 = imgNickname['md126PanoramicSlidingDoor9'];
  imgPath2 = imgNickname['md126PanoramicSlidingDoor10'];
  imgPath22 = imgNickname['md126PanoramicSlidingDoor11'];
  imgPath3 = imgNickname['md126PanoramicSlidingDoor12'];
  imgPath4 = imgNickname['md126PanoramicSlidingDoor14'];
  imgPath5 = imgNickname['md126PanoramicSlidingDoor15'];
  imgPath6 = imgNickname['md126PanoramicSlidingDoor16'];
  imgPath7 = imgNickname['md126PanoramicSlidingDoor17'];
  imgPath8 = imgNickname['md126PanoramicSlidingDoor18'];
  imgPath9 = imgNickname['md126PanoramicSlidingDoor19'];
  imgPath10 = imgNickname['md126PanoramicSlidingDoor20'];
  imgPath11 = imgNickname['md126PanoramicSlidingDoor21'];
  imgPath12 = imgNickname['md126PanoramicSlidingDoor22'];
  imgPath13 = imgNickname['md126PanoramicSlidingDoor23'];
  imgPath14 = imgNickname['md126PanoramicSlidingDoor24'];
  imgPath15 = imgNickname['md126PanoramicSlidingDoor25'];
  imgPath16 = imgNickname['md126PanoramicSlidingDoor26'];
}
