import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

const oldPages = [1, 2, 3, 4, 5];

const newPages = oldPages.reverse();

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
  standalone: true,
  imports: [NgIf, NgFor],
})
export class ContentComponent {
  isShowMan = true;
  Pages = newPages;
}
