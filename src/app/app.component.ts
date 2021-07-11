import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'digest-rater';
  currentUser = '';
  hid = false;

  constructor(private cookieService: CookieService, private router: Router) {
    this.currentUser = cookieService.get('currentUser');
  }

  ngOnInit() {
    const mrToken = this.cookieService.get('mr-token');
    if (!mrToken) {
      document.getElementById('menu-share').hidden = true;
    }
  }

  logout() {
    this.cookieService.delete('mr-token');
    //this.router.navigate(['/auth']);
    this.router.navigate(['/home']);
    location.reload();
  }
}