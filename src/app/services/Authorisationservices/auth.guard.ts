import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService,private router:Router) {

  }
canActivate():boolean {
    if (this.auth.isLoggedIn()) {
      return this.auth.isLoggedIn();
    }
    else {
      this.router.navigateByUrl('/signin');
      return false;
    }
  }

}
