import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DynamicSliderFromApiComponent } from '../../dynamic-slider-from-api/dynamic-slider-from-api.component';
import { ImgSliderComponent } from '../../img-slider/img-slider.component';
import { StrapiService } from '../../../service/strapiApi';

@Component({
  selector: 'app-australia',
  standalone: true,
  imports: [DynamicSliderFromApiComponent, ImgSliderComponent,CommonModule],
  templateUrl: './australia.component.html',
  styleUrl: './australia.component.scss',
})
export class AustraliaComponent {
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
