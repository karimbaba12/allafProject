import { Component } from '@angular/core';
import { SmallImgSliderComponent } from "../../small-img-slider/small-img-slider.component";
import { ImgSliderComponent } from "../../img-slider/img-slider.component";
import { imgNickname } from '../../../service/imgNickName';


@Component({
  selector: 'app-bliinds-between-glass',
  standalone: true,
  imports: [SmallImgSliderComponent, ImgSliderComponent],
  templateUrl: './bliinds-between-glass.component.html',
  styleUrl: './bliinds-between-glass.component.scss'
})
export class BliindsBetweenGlassComponent {
  imgPath1 = imgNickname['blindsBetweenGlass2'];
  imgPath2 = imgNickname['blindsBetweenGlass3'];
  imgPath3 = imgNickname['blindsBetweenGlass4'];
  imgPath4 = imgNickname['blindsBetweenGlass5'];
  imgPath5 = imgNickname['blindsBetweenGlass6'];
  imgPath6 = imgNickname['blindsBetweenGlass7'];
  imgPath7 = imgNickname['blindsBetweenGlass8'];
  imgPath8 = imgNickname['blindsBetweenGlass9'];
  imgPath9 = imgNickname['blindsBetweenGlass10'];
  imgPath10 = imgNickname['blindsBetweenGlass11'];
  imgPath11 = imgNickname['blindsBetweenGlass12'];
  imgPath12 = imgNickname['blindsBetweenGlass13'];

}
