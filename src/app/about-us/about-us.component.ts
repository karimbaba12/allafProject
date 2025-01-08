import { Component } from '@angular/core';
import { ImgSliderComponent } from '../img-slider/img-slider.component';
import { CommonModule } from '@angular/common';
import { StrapiService } from '../../service/strapiApi';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [ImgSliderComponent, CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
  providers: [StrapiService],
})
export class AboutUsComponent {
  
  data: any[] = [];

  constructor(private strapiService: StrapiService) {}

  ngOnInit(): void {
    this.strapiService.getData().subscribe(
      (response) => {
        this.data = response.data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
