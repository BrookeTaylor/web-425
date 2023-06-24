/*
============================================
; Title: Exercise 5.3 - Data Tables
; Author: Professor Krasso
; Date: 06/24/2023
; Modified By: Brooks
; Description: app component
============================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // Create a new variable and name it assignment
  assignment: string;

  constructor() {

    // In the components constructor assign the assignment variable
    // the value “Exercise 5.3 - Data Tables”
    this.assignment = "Exercise 5.3 - Data Tables";

  }

}
