import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../footer/footer.component";
@Component({
  selector: 'app-casement-window',
  standalone: true,
  imports: [NavbarComponent, CommonModule, FooterComponent],
  templateUrl: './casement-window.component.html',
  styleUrl: './casement-window.component.css'
})
export class CasementWindowComponent {
  isFirstDivVisible: boolean = true; // Initially show the first div
  isSecondDivVisible: boolean = false; // Initially hide the second div

  // Method to toggle the first div visibility
  toggleFirstDiv() {
    this.isFirstDivVisible = true;
    this.isSecondDivVisible = false;
  }

  // Method to hide the first div and show the second div
  showSecondDiv() {
    this.isFirstDivVisible = false;
    this.isSecondDivVisible = true;
  }

}
