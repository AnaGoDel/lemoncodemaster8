import { Injectable } from '@angular/core';
import { UserEntity } from '../model/UserEntity';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login(user): boolean {
    if ((user.username === 'master8@lemoncode.net') && (user.password === '12345678')) {
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.router.navigateByUrl('/home');
  }

  isLogged(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }

  getUsername(): string {
    const email = JSON.parse((localStorage.getItem('currentUser'))).username;
    const username = email.split('@');
    return username[0];
  }
}
