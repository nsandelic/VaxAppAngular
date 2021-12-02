import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserCredentials } from '../user/user-credentials.model';
import { User } from '../user/user.model';
import { UserService } from '../user/user.service';
import { JwtToken } from './jwt-model';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authenticating = false; // to show loading
  loginFailed = false; // to show login failed message
  userCredentials: UserCredentials;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userCredentials = new UserCredentials(); // check if its already logged in
  }

  login(){
    this.authenticating = true;
    this.loginFailed = false;

    this.loginService.authenticate(this.userCredentials).subscribe(
      (jwtToken: JwtToken) => this.successfulLogin(jwtToken),
      () => this.loginFailed = true
    ).add(() => this.authenticating = false);


  }


  
    successfulLogin(jwtToken: JwtToken) {
      localStorage.setItem('token', jwtToken.token) // Storing token value to local storage
      this.userService.getCurrentUser().subscribe((currentUser: User) => this.userService.currentUser = currentUser);
      this.router.navigate(['/']);
    }

  




}
