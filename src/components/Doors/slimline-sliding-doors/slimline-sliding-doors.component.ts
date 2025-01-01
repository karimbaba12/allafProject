import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../../slider/slider.component';

@Component({
  selector: 'app-slimline-sliding-doors',
  standalone: true,
  imports: [NavbarComponent, CommonModule, SliderComponent],
  templateUrl: './slimline-sliding-doors.component.html',
  styleUrl: './slimline-sliding-doors.component.css'
})
export class SlimlineSlidingDoorsComponent {
  imageSet: string[] = [
    'https://via.placeholder.com/600x300?text=Image+1',
    'https://via.placeholder.com/600x300?text=Image+2',
    'https://via.placeholder.com/600x300?text=Image+3',
    'https://via.placeholder.com/600x300?text=Image+4',
    'https://via.placeholder.com/600x300?text=Image+5',
    'https://via.placeholder.com/600x300?text=Image+6',
    'https://via.placeholder.com/600x300?text=Image+7',
    'https://via.placeholder.com/600x300?text=Image+8',
    'https://via.placeholder.com/600x300?text=Image+9',
    'https://via.placeholder.com/600x300?text=Image+10'
  ];
}
