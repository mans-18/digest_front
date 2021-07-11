import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';


interface tokenObj {
  token: string;
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authForm = new FormGroup({
    username: new FormControl(this.cookieService.get('currentUser')),
    password: new FormControl('')
  });

  registerMode = false;

  constructor(
    private apiService: ApiService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit(): void {
    //this.getUsers();
    // If the token exists (user logged in), goes to calendar without logging in again
    const mrToken = this.cookieService.get('mr-token');
    console.log('mrToken on auth:', mrToken);
    if (mrToken) {
      this.router.navigate(['/dashboard']);
    }
  }
  // getUsers() {
  //   this.apiService.getUsers().subscribe(result => {console.log('users', result)}, error => console.log(error));
  // }


  saveForm() {
    console.log(document.cookie, 'authFormValue', this.authForm.value);
    if (!this.registerMode) {
      this.loginUser();
    } else {
      this.apiService.registerUser(this.authForm.value).subscribe(
        result => {
          this.loginUser();
        },
        error => console.log(error)
      );
    }
  }

  loginUser() {
    this.apiService.loginUser(this.authForm.value).subscribe(
      (result: any) => {
        // this.cookieService.set('mr-token', result.token, 159888,'','', false);
        this.cookieService.set('mr-token', result.token); //document.cookie,);
        this.cookieService.set('currentUser', this.authForm.value.username);
        if (this.authForm.value.username == 'marina@dig.com') {
          this.router.navigate(['/assistant']);
        } else {
          this.router.navigate(['/dashboard']);
        }
      },
      error => console.log(error)
    );
  }
}

