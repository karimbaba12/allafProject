import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  email = "222@gmail.com"
  constructor(private router: Router) {}

  // Scroll to the top after routing
  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
