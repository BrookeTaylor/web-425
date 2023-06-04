/*
============================================
; Title: Exercise 2.4 - Routing in Action
; Author: Professor Krasso
; Date: 06/03/2023
; Modified By: Brooks
; Description: composer-list Component
============================================
*/


import { Component, OnInit } from '@angular/core';



// Create a Composer class with two fields: fullName, genre
export default class Composer {
  fullName: string;
  genre: string;


// In the constructor accept two parameters: fullName and genre and map them to
// the class fields.
  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }

}



@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {


// In the component, add a variable called composers and give it a data type of
// an Array<Composer>
  composers: Array<Composer>;

  constructor() {

// In the components constructor, create a new Array and initialize it with
// 5 new Composer objects
    this.composers = [

      new Composer('Ludwig Beethoven', 'Classical'),
      new Composer('Wolfgang Mozart', 'Classical'),
      new Composer('Johannes Brahms', 'Classical'),
      new Composer('Richard Wagner', 'Classical'),
      new Composer('Peter Tchaikovsky', 'Classical')

    ];

  }

  ngOnInit(): void {
  }

}
