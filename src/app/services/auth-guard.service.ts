import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private authservice: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (!this.authservice.isLoggedIn()) {
      this.router.navigate(['admin/login']);
      return false;
    }
    return true;
  }

}
