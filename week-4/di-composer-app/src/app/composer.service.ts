/*
============================================
; Title: Exercise 4.2 - Inversion of Control and Dependency Injection
; Author: Professor Krasso
; Date: 06/12/2023
; Modified By: Brooks
; Description: composer.service
============================================
*/

import { Injectable } from '@angular/core';

import { IComposer } from './composer.interface';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

   // Add a new field called composers of type Array<IComposer>
   composers: Array<IComposer>;

   // Remove the fullName and genre fields from the
   // constructor’s parameters
     constructor() {


   // Remove the code in the body of the constructor

   // In the class’s constructor, populate the composer’s array
   // with 5 composer objects
     this.composers = [

       {
         composerId: 100, fullName: 'Ludwig Beethoven', genre: 'Classical'
       },
       {
         composerId: 101, fullName: 'Wolfgang Mozart', genre: 'Classical'
       },
       {
         composerId: 102, fullName: 'Johannes Brahms', genre: 'Classical'
       },
       {
         composerId: 103, fullName: 'Richard Wagner', genre: 'Classical'
       },
       {
         composerId: 104, fullName: 'Peter Tchaikovsky', genre: 'Classical'
       }

     ];


     }

     getComposers() {
       // Return the composers array
       return this.composers;
     }

     getComposer(composerId: number) {

       // Loop over the composer array and return the object that matches
       // the passed-in composerId
       for (let composer of this.composers)
         if (composer.composerId === composerId) {
           return composer;
         }
     }
}
