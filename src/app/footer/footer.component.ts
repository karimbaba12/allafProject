import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  email = 'info@hasco-intl.com.au';
  number = '+61 410 181 003';
  constructor(private router: Router) {}

  // Scroll to the top after routing
  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
