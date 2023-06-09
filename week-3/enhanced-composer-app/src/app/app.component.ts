/*
============================================
; Title: Exercise 3.2 - Passing Data to Routes, Part 1
; Author: Professor Krasso
; Date: 06/08/2023
; Modified By: Brooks
; Description: app.component.ts
============================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

// Change the assignment’s name to “Exercise 3.2 - Passing Data to Routes, Part 1
  assignment: string = 'Exercise 3.2 - Passing Data to Routes, Part 1';

}
