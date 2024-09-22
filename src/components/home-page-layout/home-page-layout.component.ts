import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from "../footer/footer.component";
@Component({
  selector: 'app-home-page-layout',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './home-page-layout.component.html',
  styleUrl: './home-page-layout.component.css'
})
export class HomePageLayoutComponent {

}
