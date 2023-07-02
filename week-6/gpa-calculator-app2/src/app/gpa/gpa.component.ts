/*
============================================
; Title: Exercise 6.4 - Input Properties
; Author: Professor Krasso
; Date: 07/02/2023
; Modified By: Brooks
; Description: gpa component
============================================
*/

// Add an import statement for Input properties
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent implements OnInit {


  // Add an @Input variable named gpaTotal of type number
  @Input() gpaTotal: number;

  constructor() { }

  ngOnInit(): void {
  }

}
