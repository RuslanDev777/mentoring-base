import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UsersService } from 'src/app/users.service';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [NgIf, RouterLink],
})
export class HomeComponent {
  private userService = inject(UsersService);

  loginAsAdmin() {
    this.userService.loginAsAdmin();
  }

  loginAsUser() {
    this.userService.loginAsUser();
  }
  logout() {
    this.userService.logout();
  }
  isAdmin(): boolean {
    return this.userService.isAdmin();
  }
}
