import { AsyncPipe, DatePipe, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ColorDirective } from '../directives/color.directive';
import { MatDialog } from '@angular/material/dialog';

import { UserService } from '../user.service';

const menuItems = [
  'Каталог',
  'Стройматериалы',
  'Инструменты',
  'Электрика',
  'Интерьер и одежда',
];

const upperCaseMenuItems = menuItems.map((item) => {
  return item.toUpperCase();
});

const returnName = (name: string) => {
  return name;
};

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink, DatePipe, ColorDirective],
})
export class HeaderComponent {
  readonly dialog = inject(MatDialog);
  public readonly userService = inject(UserService);
  today: number = Date.now();
  isShowCatalog = true;

  headerHome = 'Главная';
  aboutCompany = returnName('О компании');
  headerCompany = 'О компании';
  headerCatalog = 'Каталог';
  toolBarCatalog = 'Каталог';
  toolBarStroy = 'Стройматериалы';
  toolBarInstr = 'Инструменты';
  toolBarIlectric = 'Электрика';
  toolBarClous = 'Интерьер и одежда';
  menuItems = upperCaseMenuItems;

  isUpperCase = true;

  changeMenuText() {
    this.menuItems = upperCaseMenuItems.map((item) =>
      this.isUpperCase ? item.toUpperCase() : item.toLowerCase()
    );

    this.isUpperCase = !this.isUpperCase;
  }
}
