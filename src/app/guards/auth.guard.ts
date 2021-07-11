import { Injectable, Input } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { ApiService } from 'src/services/api.service';


@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  
  constructor(private cookieService: CookieService,
    private router: Router, private apiService: ApiService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      const mrToken = this.cookieService.get('mr-token');
      //console.log('mrToken on guard canAct:', mrToken);
      if (!mrToken) {
        this.router.navigate(['/auth']);
        return false;
      } else {
        console.log('state', state.url, route);
        return true;
      }
    }
  
}
