import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-private-menu',
  templateUrl: './private-menu.component.html',
  styleUrls: ['./private-menu.component.scss']
})
export class PrivateMenuComponent implements OnInit {
  onPrivateMenu = false;
  username: string;

  constructor(private service: AuthService) { }

  ngOnInit(): void {
    this.username = this.service.getUsername();
  }

  logOutUser(): void {
    const logout = confirm('You are about to log out. Are you sure?');
    if (logout) { this.service.logout(); }
  }

}
