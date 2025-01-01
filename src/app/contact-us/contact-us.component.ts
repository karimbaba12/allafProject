import { Component } from '@angular/core';
import { ImgSliderComponent } from "../img-slider/img-slider.component";
import { imgNickname } from '../../service/imgNickName';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ImgSliderComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  email = "222@gmail.com"
  imgPath1= imgNickname['contactUs2'];
  imgPath2= imgNickname['contactUs3'];
  imgPath3= imgNickname['contactUs4'];
  imgPath4= imgNickname['contactUs5'];

}
