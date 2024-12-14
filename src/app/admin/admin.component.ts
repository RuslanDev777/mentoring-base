import { Component, inject } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
  private userService = inject(UserService);
  private router = inject(Router);

  logout() {
    this.userService.logout();
    this.router.navigate(['/']);
  }
}
