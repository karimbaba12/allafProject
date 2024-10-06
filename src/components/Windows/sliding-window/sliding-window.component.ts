import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-sliding-window',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './sliding-window.component.html',
  styleUrl: './sliding-window.component.css'
})
export class SlidingWindowComponent {

}
