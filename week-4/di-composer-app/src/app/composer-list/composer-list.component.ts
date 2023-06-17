/*
============================================
; Title: Exercise 4.2 – Inversion of Control and Dependency Injection
; Author: Professor Krasso
; Date: 06/12/2023
; Modified By: Brooks
; Description: composer-list Component
============================================
*/


import { Component, OnInit } from '@angular/core';

// Add an import for the IComposer interface
import { IComposer } from '../composer.interface';

// Add an import statement for the Composer service
import { ComposerService } from '../composer.service';


@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  // Update the composer’s variable to be of type Array<IComposer>
  composers: Array<IComposer>;

// Add the ComposerService to the components constructor
  constructor(private composerService: ComposerService) {

// In the body of the components constructor, replace the getComposers() call
// from the Composer class with the composerService.getComposers() function
    this.composers = this.composerService.getComposers();


  }

  ngOnInit(): void {
  }

}
