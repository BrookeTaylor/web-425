/*
============================================
; Title: Exercise 3.2 - Passing Data to Routes, Part 1
; Author: Professor Krasso
; Date: 06/09/2023
; Modified By: Brooks
; Description: composer-list Component
============================================
*/


import { Component, OnInit } from '@angular/core';

// Add an import for the IComposer interface
import { IComposer } from '../composer.interface';
// Add an import for the Composer class
import { Composer } from '../composer.class';


@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  // Update the composer’s variable to be of type Array<IComposer>
  composers: Array<IComposer>;


  constructor() {

    // In the components constructor create a new Composer object and
    // assign the getComposers() function to the composers variable
    this.composers = new Composer().getComposers();


  }

  ngOnInit(): void {
  }

}
