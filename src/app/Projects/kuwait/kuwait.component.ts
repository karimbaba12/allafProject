import { Component, OnInit } from '@angular/core';
import { StrapiService } from '../../../service/strapiApi';
import { DynamicSliderFromApiComponent } from "../../dynamic-slider-from-api/dynamic-slider-from-api.component";
import { ImgSliderComponent } from "../../img-slider/img-slider.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kuwait',
  standalone: true,
  imports: [DynamicSliderFromApiComponent, ImgSliderComponent,CommonModule],
  templateUrl: './kuwait.component.html',
  styleUrl: './kuwait.component.scss'
})
export class KuwaitComponent implements OnInit {
   data: any[] = [];
  
    constructor(private strapiService: StrapiService) {}
  
    ngOnInit(): void {
      this.strapiService.getDataKuwait().subscribe(
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
