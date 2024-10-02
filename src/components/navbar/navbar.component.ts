import { CommonModule } from '@angular/common'; 
import { Component, AfterViewInit, Inject, PLATFORM_ID, NgZone } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
declare var bootstrap: any;

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object ,private zone:NgZone ) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Code interacting with the DOM should go here.
      // For example, initializing Bootstrap components:
      // bootstrap.Tooltip.initialize();
    }
  }
   
}
