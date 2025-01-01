import { Component,Inject, PLATFORM_ID,AfterViewInit, NgZone } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../footer/footer.component";

import { CasementWindow2Component } from "../casement-window2/casement-window2.component";
@Component({
  selector: 'app-casement-window',
  standalone: true,
  imports: [NavbarComponent, CommonModule, FooterComponent, CasementWindow2Component],
  templateUrl: './casement-window.component.html',
  styleUrl: './casement-window.component.css'
})
export class CasementWindowComponent  {
 
}
