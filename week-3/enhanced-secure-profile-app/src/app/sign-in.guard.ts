/*
============================================
; Title: Exercise 3.4 - Guarding Routes
; Author: Professor Krasso
; Date: 06/09/2023
; Modified By: Brooks
; Description: sign-in.guard - Guarding Routes
============================================
*/

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

// Add an import statement for Angular’s built-in Router
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {


  // Add the Router to the guards constructor (note: you will need to
  // create a constructor)
  constructor(private router: Router) {

  }



  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

// In the body of the canActivate() function add a variable for isLoggedIn
// and assign it the returned value from the queryParams function
      let isLoggedIn = next.queryParams.isLoggedIn;

      // If isLoggedIn equals true, return true
      if (isLoggedIn) {
        return true;
      }

      // If isLoggedIn equals false, navigate users back to the sign-in page
        else {
        this.router.navigate(['/']);
        return false;
      }

  }

}

