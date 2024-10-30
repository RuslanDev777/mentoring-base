import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

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
  imports: [NgIf, NgFor, RouterOutlet, RouterLink],
})
export class HeaderComponent {
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
