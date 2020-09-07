import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { CanActivate, Router } from '@angular/router';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit, CanActivate {

  constructor(private service: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  canActivate(): boolean {
    // If the user is not logged in we'll send them back to the home page
    if (!this.service.isLogged()) {
      console.log('No estás logueado');
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }

}
