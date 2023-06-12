/*
============================================
; Title: Exercise 3.4 - Guarding Routes
; Author: Professor Krasso
; Date: 06/09/2023
; Modified By: Brooks
; Description: my-details.component - Guarding Routes
============================================
*/

import { Component, OnInit } from '@angular/core';

export default class Person {

  fullName: string;
  favoriteFood: string;
  favoriteColor: string;

  keywords = [
    "#TypeScript, #2020, #CodingWithAngular, #ngOmaha"
  ]

  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {

    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;

  }

  toString() {
    console.log(`\n Full name: ${this.fullName}\n Favorite food: ${this.favoriteFood}\n Favorite color: ${this.favoriteColor}`);
  }

}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  myProfile: Person;

  constructor() {
    this.myProfile = new Person("Brooke Taylor", "Cheeseburgers", "Purple");
    this.myProfile.toString();
   }

  ngOnInit(): void {
  }

}
