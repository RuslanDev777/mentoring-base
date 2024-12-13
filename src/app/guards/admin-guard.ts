import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { UsersService } from '../users.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  private userService = inject(UsersService);
  private router = inject(Router);

  canActivate(): boolean {
    const isAdmin = this.userService.isAdmin();

    if (!isAdmin) {
      alert('Доступ запрещен! Вы должны быть администратом');
      this.router.navigate(['/']);
    }
    return isAdmin;
  }
}
