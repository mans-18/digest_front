import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { ApiService } from 'src/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class AssistantGuard implements CanActivate {

  constructor(private cookieService: CookieService,
    private router: Router, private apiService: ApiService) {}
    
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let currentUser = this.cookieService.get('currentUser');
    if (currentUser == 'marina@dig.com') {
      return true;
    } else {
      this.router.navigate(['/auth']);
      return false;}
  }
  
}
