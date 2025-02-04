import { Component, OnInit } from '@angular/core';
import { StrapiService } from '../../../service/strapiApi';
import { ImgSliderComponent } from "../../img-slider/img-slider.component";
import { DynamicSliderFromApiComponent } from "../../dynamic-slider-from-api/dynamic-slider-from-api.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lebanon',
  standalone: true,
  imports: [ImgSliderComponent, DynamicSliderFromApiComponent,CommonModule],
  templateUrl: './lebanon.component.html',
  styleUrl: './lebanon.component.scss',
})
export class LebanonComponent implements OnInit {
  data: any[] = [];

  constructor(private strapiService: StrapiService) {}

  ngOnInit(): void {
    this.strapiService.getDataLebanon().subscribe(
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
