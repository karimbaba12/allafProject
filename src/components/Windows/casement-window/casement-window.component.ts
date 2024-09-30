import { Component,Inject, PLATFORM_ID,AfterViewInit, NgZone } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../footer/footer.component";
import { isPlatformBrowser } from '@angular/common';
import { CasementWindow2Component } from "../casement-window2/casement-window2.component";
@Component({
  selector: 'app-casement-window',
  standalone: true,
  imports: [NavbarComponent, CommonModule, FooterComponent, CasementWindow2Component],
  templateUrl: './casement-window.component.html',
  styleUrl: './casement-window.component.css'
})
export class CasementWindowComponent implements AfterViewInit {
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

  constructor(@Inject(PLATFORM_ID) private platformId: Object , private zone : NgZone) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        const body = document.querySelector('body');
        if (body) {
          body.classList.add('loaded');
        }
      });
    }
  }
  sendMessage() {
    window.postMessage({ type: 'TEST', text: 'Hello World' }, '*');

    window.addEventListener('message', (event) => {
      if (event.data.type === 'TEST') {
        this.zone.run(() => {
          console.log('Message received: ', event.data.text);
        });
      }
    });
  }
}
