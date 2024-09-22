import { CommonModule } from '@angular/common';
import { Component,AfterViewInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
declare var bootstrap: any;

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements AfterViewInit {
 ngAfterViewInit(): void {
    const myCarousel = document.getElementById('carouselExampleControls');
    const carousel = new bootstrap.Carousel(myCarousel, {
      interval: 2000,
      ride: 'carousel'
    });
  }
} 