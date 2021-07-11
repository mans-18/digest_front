import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent implements OnInit {

  constructor(private apiService: ApiService, private cookieService: CookieService) { }

  ngOnInit(): void {
    const mrToken = this.cookieService.get('mr-token');
    if (!mrToken) {
      document.getElementById('photoCap').hidden = true;
    }
  }

// Used to toggle the menu on smaller screens when clicking on the menu button
openNav() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

// Script for side navigation
w3_open() {
  var x = document.getElementById("mySidebar");
  x.style.width = "300px";
  x.style.paddingTop = "10%";
  x.style.display = "block";
}

// Close side navigation
w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}

}
