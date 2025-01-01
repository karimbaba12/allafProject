import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img-album',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './img-album.component.html',
  styleUrl: './img-album.component.scss'
})
export class ImgAlbumComponent {
  @Input() images: any[] = [];  // To accept the images passed from parent component

}
