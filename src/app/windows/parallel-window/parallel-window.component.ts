import { Component, Input } from '@angular/core';
import { ImgSliderComponent } from "../../img-slider/img-slider.component";
import { SmallImgSliderComponent } from "../../small-img-slider/small-img-slider.component";
import { imgNickname } from '../../../service/imgNickName';

@Component({
  selector: 'app-parallel-window',
  standalone: true,
  imports: [ImgSliderComponent, SmallImgSliderComponent],
  templateUrl: './parallel-window.component.html',
  styleUrl: './parallel-window.component.scss'
})
export class ParallelWindowComponent {
  imgPath1 = imgNickname['parallelWindow8'];
  imgPath2 = imgNickname['parallelWindow9'];
  imgPath22 = imgNickname['parallelWindow10'];
  imgPath222 = imgNickname['parallelWindow11'];
  imgPath3 = imgNickname['parallelWindow12'];
  imgPath4 = imgNickname['parallelWindow13'];
  imgPath5 = imgNickname['parallelWindow14'];
  imgPath6 = imgNickname['parallelWindow15'];
  imgPath7 = imgNickname['parallelWindow16'];
  imgPath8 = imgNickname['parallelWindow17'];
  imgPath9 = imgNickname['parallelWindow18'];
  imgPath10 = imgNickname['parallelWindow19'];
  imgPath11 = imgNickname['parallelWindow20'];
  imgPath12 = imgNickname['parallelWindow19'];
  imgPath13 = imgNickname['parallelWindow2'];
  imgPath14 = imgNickname['parallelWindow3'];
  imgPath15 = imgNickname['parallelWindow3'];

}
