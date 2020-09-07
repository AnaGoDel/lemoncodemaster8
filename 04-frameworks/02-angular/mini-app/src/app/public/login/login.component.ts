import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserEntity } from 'src/app/model/UserEntity';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  public loginInvalid: boolean;

  user: UserEntity = {
    username: '',
    password: '',
  };

  constructor(private fb: FormBuilder, private service: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.loginInvalid = false;
    if (this.service.login(this.user)) {
      localStorage.setItem('currentUser', JSON.stringify(this.user));
      this.router.navigateByUrl('/dashboard');
    } else {
      localStorage.removeItem('user');
      this.loginInvalid = true;
    }
  }

}
