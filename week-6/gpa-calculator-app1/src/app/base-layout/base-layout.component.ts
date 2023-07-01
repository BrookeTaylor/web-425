/*
============================================
; Title: Exercise 6.3 - Layouts
; Author: Professor Krasso
; Date: 06/30/2023
; Modified By: Brooks
; Description: Base-Layout component
============================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  // Create a string variable named assignment
  assignment: string;

  constructor() {

    // In the components constructor assign the assignment variable
    // a value of ‘Exercise 6.3 - Layouts’
    this.assignment = 'Exercise 6.3 - Layouts';
  }

  ngOnInit(): void {
  }

}
