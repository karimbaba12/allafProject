import { Component } from '@angular/core';
import { ImgSliderComponent } from '../img-slider/img-slider.component';
import { CommonModule } from '@angular/common';
import { StrapiService } from '../../service/strapiApi';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [ImgSliderComponent, CommonModule, RouterModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
  providers: [StrapiService],
})
export class AboutUsComponent {}
