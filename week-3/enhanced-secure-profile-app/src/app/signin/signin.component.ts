/*
============================================
; Title: Exercise 3.4 - Guarding Routes
; Author: Professor Krasso
; Date: 06/09/2023
; Modified By: Brooks
; Description: signin.component - Guarding Routes
============================================
*/

import { Component, OnInit } from '@angular/core';

// Add an import statement for Angular’s built-in Router
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {


  // Add a variable named isLoggedIn of type boolean and assign it
  // a default value of false
  isLoggedIn: boolean = false;

  // Add Angular’s built-in Router to the components constructor
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // Add a function named signIn
  signin() {

    // Update the isLoggedIn variables value to true
    this.isLoggedIn = true;
/**
 * Using the router.navigate() function navigate to the HomeComponent and
 * pass-in the isLoggedIn value through the query params argument
 */
    this.router.navigate(['/home'], {queryParams: {isLoggedIn: this.isLoggedIn}, skipLocationChange: true})

  }

}
