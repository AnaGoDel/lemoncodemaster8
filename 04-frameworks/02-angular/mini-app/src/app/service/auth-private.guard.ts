import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthPrivateGuard implements CanActivate {
  constructor(private service: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (!this.service.isLogged()) {
      console.log('No estás logueado');
      this.router.navigateByUrl('/home');
      return false;
    }
    return true;
  }

}

