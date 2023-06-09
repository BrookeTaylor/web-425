/*
============================================
; Title: Exercise 3.2 - Passing Data to Routes, Part 1
; Author: Professor Krasso
; Date: 06/08/2023
; Modified By: Brooks
; Description: composer-details.component
============================================
*/

import { Component, OnInit } from '@angular/core';

// Add an import statement for the IComposer interface
import { IComposer } from '../composer.interface';
// Add a variable called composer of type IComposer
import { Composer } from '../composer.class';
// Add an import statement for the ActivatedRoute from Angular’s built-in RouterModule
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
export class ComposerDetailsComponent implements OnInit {

  // Add a variable called composerId of type number
  composerId: number;
  composer: IComposer;


  // In the components constructor and using the ActivatedRoute object
  constructor(private route: ActivatedRoute) {

    // call the snapshot function to retrieve the composerId parameter
    //value and assign it to the composerId variable.

    // Parameter values will always return a string value, so you will
    // need to use parseInt to parse the string into a numerical value
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId'), 10);

    // Add an if statement to check the composerId value
    if (this.composerId) {
      this.composer = new Composer().getComposer(this.composerId);
    }

   }

  ngOnInit(): void {
  }

}
