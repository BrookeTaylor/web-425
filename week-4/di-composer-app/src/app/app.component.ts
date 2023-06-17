/*
============================================
; Title: Exercise 4.2 - Inversion of Control and Dependency Injection
; Author: Professor Krasso
; Date: 06/12/2023
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

// Change the assignment’s name to “Exercise 4.2 - Inversion of Control and Dependency Injection"
  assignment: string = 'Exercise 4.2 - Inversion of Control and Dependency Injection';

}
