import { Component, Input } from '@angular/core';
import { ImgSliderComponent } from "../../img-slider/img-slider.component";
import { SmallImgSliderComponent } from "../../small-img-slider/small-img-slider.component";
import { imgNickname } from '../../../service/imgNickName';

@Component({
  selector: 'app-curtain-wall-window',
  standalone: true,
  imports: [ImgSliderComponent, SmallImgSliderComponent],
  templateUrl: './curtain-wall-window.component.html',
  styleUrl: './curtain-wall-window.component.scss'
})
export class CurtainWallWindowComponent {
  imgPath1 = imgNickname['curtainWallWindow11'];
  imgPath2 = imgNickname['curtainWallWindow12'];
  imgPath3 = imgNickname['curtainWallWindow13'];
  imgPath4 = imgNickname['curtainWallWindow14'];
  imgPath5 = imgNickname['curtainWallWindow15'];
  imgPath6 = imgNickname['curtainWallWindow16'];
  imgPath7 = imgNickname['curtainWallWindow17'];
  imgPath8 = imgNickname['curtainWallWindow18'];
  imgPath9 = imgNickname['curtainWallWindow19'];
  imgPath10 = imgNickname['curtainWallWindow20'];
  imgPath11 = imgNickname['curtainWallWindow21'];
  imgPath12 = imgNickname['curtainWallWindow22'];
  imgPath13 = imgNickname['curtainWallWindow22'];
  imgPath14 = imgNickname['curtainWallWindow23'];
  imgPath15 = imgNickname['curtainWallWindow23'];
  imgPath16 = imgNickname['curtainWallWindow24'];

}
