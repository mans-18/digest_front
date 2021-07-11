import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  emailForm = new FormGroup({
    name: new FormControl(''),
    mobile: new FormControl(''),
    email: new FormControl(''),
    body: new FormControl(''),
    like: new FormControl(), //boolean
  });

  constructor(private apiService: ApiService, private cookieService: CookieService) { }

  ngOnInit(): void {
    const mrToken = this.cookieService.get('mr-token');
    if (!mrToken) {
      document.getElementById('photoCap').hidden = true;
    }
  }

  emailSendClient() {
    // Send an email from the client smtp. Needs an email account configured
    const name = this.emailForm.value.name;
    const email = this.emailForm.value.email;
    const body = this.emailForm.value.body;
    const like = this.emailForm.value.like;
    
    var link = "mailto:contato@digest.com.br"
                + "?cc=mans@ufc.br"
                + "&subject=" + encodeURIComponent(`${name}`)
                + "&body=" + encodeURIComponent(body);
    console.log(this.emailForm.value.name, 'link', link);
    //window.location.href = link;
    window.open(link);
}

emailSendServer() {
  // Starts an email from the server.
  // Sends data to the API by a service. The API sends the email from a proprietary account: miguel.sza@gmail.com
  this.apiService.emailFromSite(
    this.emailForm.value.name,
    this.emailForm.value.mobile,
    this.emailForm.value.email,
    this.emailForm.value.body
    ).subscribe();
}

}
