import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

const oldPages = [1, 2, 3, 4, 5];

const newPages = oldPages.reverse();

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink, RouterOutlet],
})
export class ContentComponent {
  isShowMan = true;
  Pages = newPages;
}
