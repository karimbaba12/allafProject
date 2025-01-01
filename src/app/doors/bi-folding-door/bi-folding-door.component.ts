import { Component } from '@angular/core';
import { ImgSliderComponent } from "../../img-slider/img-slider.component";
import { SmallImgSliderComponent } from '../../small-img-slider/small-img-slider.component';
import { imgNickname } from '../../../service/imgNickName';

@Component({
  selector: 'app-bi-folding-door',
  standalone: true,
  imports: [ImgSliderComponent,SmallImgSliderComponent ],
  templateUrl: './bi-folding-door.component.html',
  styleUrl: './bi-folding-door.component.scss'
})
export class BiFoldingDoorComponent {
  imgPath1 = imgNickname['slimlineFoldingDoor9'];
  imgPath3 = imgNickname['slimlineFoldingDoor10'];
  imgPath4 = imgNickname['slimlineFoldingDoor11'];
  imgPath5 = imgNickname['slimlineFoldingDoor12'];
  imgPath6 = imgNickname['slimlineFoldingDoor13'];
  imgPath7 = imgNickname['slimlineFoldingDoor15'];
  imgPath8 = imgNickname['slimlineFoldingDoor16'];
  imgPath9 = imgNickname['slimlineFoldingDoor18'];
  imgPath10 = imgNickname['slimlineFoldingDoor19'];
  imgPath11 = imgNickname['slimlineFoldingDoor20'];
  imgPath12 = imgNickname['slimlineFoldingDoor21'];
  imgPath13 = imgNickname['slimlineFoldingDoor23'];
  imgPath14 = imgNickname['slimlineFoldingDoor25'];
  imgPath15 = imgNickname['slimlineFoldingDoor26'];

}
