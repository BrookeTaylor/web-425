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

// Add an import statement for FormControl
import { FormControl } from '@angular/forms';
// Add an import statement for rxjs debounceTime component
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  // Update the composer’s variable to be of type Array<IComposer>
  composers: Array<IComposer>;

// Add a variable named txtSearchControl and assign it a new instance
// of the FormControl object
  txtSearchControl = new FormControl('');

// Add the ComposerService to the components constructor
  constructor(private composerService: ComposerService) {

// In the body of the components constructor, replace the getComposers() call
// from the Composer class with the composerService.getComposers() function
    this.composers = this.composerService.getComposers();


// In the components constructor and underneath the getComposers() call
// add a subscribe() method that listens for valueChanges and calls
// the filterComposers() function.  Also, make sure you add a
// debounceTime of 500.
    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposers(val));


  }

  ngOnInit(): void {
  }

// Add a new function and name it filterComposers(name: string) and in
// the body of the function call the alert() function and pass-in
// the name parameter

  filterComposers(name: string) {
    alert(name);
  }

}
