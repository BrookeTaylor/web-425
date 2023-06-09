/*
============================================
; Title: Exercise 3.3 - Passing Data to Routes, Part 2
; Author: Professor Krasso
; Date: 06/09/2023
; Modified By: Brooks
; Description: home.component
============================================
*/

import { Component, OnInit } from '@angular/core';

// Add an import statement for Angular’s built-in ActivatedRoute
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Add a variable named isLoggedIn of type boolean
  isLoggedIn: Boolean;

  // Add the ActivatedRoute object to the components constructor
  constructor(private route: ActivatedRoute) {

    // Assign the isLoggedIn variable the value being passed from the
    // sign-in.component.ts using Angular’s built-in queryParamMap function
    this.isLoggedIn = Boolean(this.route.snapshot.queryParamMap.get('isLoggedIn'));
  }

  ngOnInit(): void {
  }

}
