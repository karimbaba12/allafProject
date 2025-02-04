import { Component, OnInit } from '@angular/core';
import { StrapiService } from '../../../service/strapiApi';
import { ImgSliderComponent } from '../../img-slider/img-slider.component';
import { DynamicSliderFromApiComponent } from '../../dynamic-slider-from-api/dynamic-slider-from-api.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-qatar',
  standalone: true,
  imports: [ImgSliderComponent, DynamicSliderFromApiComponent, CommonModule],
  templateUrl: './qatar.component.html',
  styleUrl: './qatar.component.scss',
})
export class QatarComponent implements OnInit {
  data: any[] = [];

  constructor(private strapiService: StrapiService) {}

  ngOnInit(): void {
    this.strapiService.getDataQatar().subscribe(
      (response) => {
        this.data = response.map((item: any) => {
          return {
            ...item,
            images:
              item.images && item.images.length
                ? item.images.map((img: any) => img) 
                : [],
          };
        });
      },
      (error) => {}
    );
  }
}
