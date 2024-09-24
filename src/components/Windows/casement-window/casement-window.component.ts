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
  isFirstDivVisible: boolean = true;
  isSecondDivVisible: boolean = false; 


  firstButton() {
    this.isFirstDivVisible = true;
    this.isSecondDivVisible = false;
  }

  secondButton() {
    this.isFirstDivVisible = false;
    this.isSecondDivVisible = true;
  }


}
