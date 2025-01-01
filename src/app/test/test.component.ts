import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrapiService } from '../../service/strapiApi';

@Component({
  selector: 'app-test',
  standalone: true, // Declare as standalone
  imports: [CommonModule], // Import CommonModule
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  providers: [StrapiService],
})
export class TestComponent {
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
