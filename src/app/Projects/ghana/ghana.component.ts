import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrapiService } from '../../../service/strapiApi';
import { DynamicSliderFromApiComponent } from "../../dynamic-slider-from-api/dynamic-slider-from-api.component";
import { ImgSliderComponent } from "../../img-slider/img-slider.component";

@Component({
  selector: 'app-ghana',
  standalone: true,
  imports: [DynamicSliderFromApiComponent, ImgSliderComponent, CommonModule],
  templateUrl: './ghana.component.html',
  styleUrl: './ghana.component.scss',
})
export class GhanaComponent implements OnInit {
  data: any[] = [];

  constructor(private strapiService: StrapiService) {}

  ngOnInit(): void {
    this.strapiService.getDataGhana().subscribe(
      (response) => {
        this.data = response.map((item: any) => {

          return {
            ...item,
            images:
              item.images && item.images.length
                ? item.images.map((img: any) => img) // Ensure images are passed
                : [],
          };
        });

      },
      (error) => {
      }
    );
  }
}
