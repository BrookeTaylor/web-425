/*
============================================
; Title: Exercise 6.2 - Input/Output Properties, Part 1
; Author: Professor Krasso
; Date: 06/28/2023
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
    // the value “Exercise 6.2 - Input/Output Properties, Part 1”
    this.assignment = "Exercise 6.2 - Input/Output Properties, Part 1";

  }

}
