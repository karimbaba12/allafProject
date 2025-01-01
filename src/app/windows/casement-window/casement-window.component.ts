import { Component, Input } from '@angular/core';
import { ImgSliderComponent } from "../../img-slider/img-slider.component";
import { SmallImgSliderComponent } from "../../small-img-slider/small-img-slider.component";
import { imgNickname } from '../../../service/imgNickName';

@Component({
  selector: 'app-casement-window',
  standalone: true,
  imports: [ImgSliderComponent, SmallImgSliderComponent],
  templateUrl: './casement-window.component.html',
  styleUrl: './casement-window.component.scss'
})
export class CasementWindowComponent {
  imgPath1 = imgNickname['casementWindow-10'];
  imgPath2 = imgNickname['casementWindow-11'];
  imgPath3 = imgNickname['casementWindow-12'];
  imgPath4 = imgNickname['casementWindow-13'];
  imgPath5 = imgNickname['casementWindow-14'];
  imgPath6 = imgNickname['casementWindow-15'];
  imgPath7 = imgNickname['casementWindow-16'];
  imgPath8 = imgNickname['casementWindow-17'];
  imgPath9 = imgNickname['casementWindow-18'];
  imgPath10 = imgNickname['casementWindow-19'];
  imgPath11 = imgNickname['casementWindow-3'];
  imgPath12 = imgNickname['casementWindow-5'];
  imgPath13= imgNickname['casementWindow-6'];
  imgPath14 = imgNickname['casementWindow-7'];
}
