import { Component, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private router: Router) {}

  @HostListener('document:click', ['$event'])
  onClick(event: Event): void {
    const navbarCollapse = document.getElementById('navbarNavDropdown');
    const target = event.target as HTMLElement;
    if (navbarCollapse && !navbarCollapse.contains(target)) {
      navbarCollapse.classList.remove('show');
    }
  }
  closeNavbar() {
    const navbarCollapse = document.getElementById('navbarNavDropdown');
    if (navbarCollapse) {
      navbarCollapse.classList.remove('show');
    }
    window.scrollTo(0, 0);

  }
}