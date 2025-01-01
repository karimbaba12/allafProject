import { Component } from '@angular/core';
import { imgNickname } from '../../service/imgNickName';

@Component({
  selector: 'app-also-here',
  standalone: true,
  imports: [],
  templateUrl: './also-here.component.html',
  styleUrl: './also-here.component.scss'
})
export class AlsoHereComponent {
  imgPath = imgNickname['home28'];  
  imgPath1 = imgNickname['home29'];  
  imgPath2 = imgNickname['home30'];  
  imgPath3 = imgNickname['home31'];  
  imgPath4 = imgNickname['home32'];  

}
