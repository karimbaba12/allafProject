import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-parallel-window',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './parallel-window.component.html',
  styleUrl: './parallel-window.component.css'
})
export class ParallelWindowComponent {

}
