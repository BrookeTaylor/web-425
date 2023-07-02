/*
============================================
; Title: Exercise 6.4 - Input Properties
; Author: Professor Krasso
; Date: 07/02/2023
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

// Update the assignment variable’s value to “Assignment 6.4 - Input Properties”
    this.assignment = 'Exercise 6.4 - Input Properties';
  }

  ngOnInit(): void {
  }

}
