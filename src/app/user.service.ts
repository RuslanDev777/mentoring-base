import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user: { isAdmin: boolean } | null = null;

  loginAsAdmin() {
    this.user = { isAdmin: true };
    localStorage.setItem('user', JSON.stringify(this.user));
  }
  loginAsUser() {
    this.user = { isAdmin: false };
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  logout() {
    this.user = null;
    localStorage.removeItem('user');
  }

  isAdmin(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    return user?.isAdmin === true;
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('user');
  }
}
