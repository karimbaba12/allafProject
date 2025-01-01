import { Component } from '@angular/core';
import { ImgSliderComponent } from "../../img-slider/img-slider.component";
import { SmallImgSliderComponent } from '../../small-img-slider/small-img-slider.component';
import { imgNickname } from '../../../service/imgNickName';

@Component({
  selector: 'app-casement-door',
  standalone: true,
  imports: [ImgSliderComponent,SmallImgSliderComponent ],
  templateUrl: './casement-door.component.html',
  styleUrl: './casement-door.component.scss'
})
export class CasementDoorComponent {

  imgPath1 = imgNickname['slimlineConcealedHingeCasementDoor7'];
  imgPath2 = imgNickname['slimlineConcealedHingeCasementDoor8'];
  imgPath3 = imgNickname['slimlineConcealedHingeCasementDoor9'];
  imgPath4 = imgNickname['slimlineConcealedHingeCasementDoor10'];
  imgPath5 = imgNickname['slimlineConcealedHingeCasementDoor11'];
  imgPath6 = imgNickname['slimlineConcealedHingeCasementDoor12'];
  imgPath7 = imgNickname['slimlineConcealedHingeCasementDoor13'];
  imgPath8 = imgNickname['slimlineConcealedHingeCasementDoor14'];
  imgPath9 = imgNickname['slimlineConcealedHingeCasementDoor15'];
  imgPath10 = imgNickname['slimlineConcealedHingeCasementDoor16'];
  imgPath11 = imgNickname['slimlineConcealedHingeCasementDoor17'];
  imgPath12 = imgNickname['slimlineConcealedHingeCasementDoor5'];

}
