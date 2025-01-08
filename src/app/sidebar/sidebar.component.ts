import { Component } from '@angular/core';
import { imgNickname } from '../../service/imgNickName';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  email = 'info@hasco-intl.com.au';
  imgPath1 = imgNickname['contactUs3'];
  imgPath2 = imgNickname['contactUs2'];
}
