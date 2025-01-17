import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StrapiService } from '../../service/strapiApi';
import { ImgSliderComponent } from '../img-slider/img-slider.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [ImgSliderComponent,CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
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
