import { Component, inject } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
  private userService = inject(UsersService);
  private router = inject(Router);

  logout() {
    this.userService.logout();
    this.router.navigate(['/']);
  }
}
