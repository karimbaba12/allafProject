import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StrapiService } from '../../../service/strapiApi';
import { ImgSliderComponent } from '../../img-slider/img-slider.component';
import { DynamicSliderFromApiComponent } from '../../dynamic-slider-from-api/dynamic-slider-from-api.component';
@Component({
  selector: 'app-project',
  standalone: true,
  imports: [ImgSliderComponent, CommonModule, DynamicSliderFromApiComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  data: any[] = [];

  constructor(private strapiService: StrapiService) {}

  ngOnInit(): void {
    this.strapiService.getDataAustralia().subscribe(
      (response) => {
        this.data = response.map((item: any) => {
          console.log('Raw item:', item);

          return {
            ...item,
            images:
              item.images && item.images.length
                ? item.images.map((img: any) => img) // Ensure images are passed
                : [],
          };
        });

        console.log('Processed Data:', this.data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
