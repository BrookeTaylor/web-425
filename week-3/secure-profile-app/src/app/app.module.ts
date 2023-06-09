/*
============================================
; Title: Exercise 3.3 - Passing Data to Routes, Part 2
; Author: Professor Krasso
; Date: 06/09/2023
; Modified By: Brooks
; Description: app.module
============================================
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyImageComponent } from './my-image/my-image.component';
import { MyDetailsComponent } from './my-details/my-details.component';
import { HomeComponent } from './home/home.component';

// Add an import for the AppRoutes object from the app.routing.ts file
import { AppRoutes } from './app.routing';
// Add an import for the RouterModule from Anuglar’s built-in Router
import { RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    MyImageComponent,
    MyDetailsComponent,
    HomeComponent,
    SigninComponent
  ],

  // Under the imports array add a call to the RouterModule and pass-in the
  // AppRoutes array of objects
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes)
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
