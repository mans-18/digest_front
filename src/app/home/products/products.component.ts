import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private apiService: ApiService, private cookieService: CookieService) { }

  ngOnInit(): void {
    const mrToken = this.cookieService.get('mr-token');
    if (!mrToken) {
      document.getElementById('photoCap').hidden = true;
    }
  }

}
