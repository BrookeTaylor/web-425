/*
============================================
; Title: Exercise 5.4 - Dialogs
; Author: Professor Krasso
; Date: 06/25/2023
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
    // the value “Assignment 5.4 - Dialogs”
    this.assignment = "Assignment 5.4 - Dialogs";

  }

}
