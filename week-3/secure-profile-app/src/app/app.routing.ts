/*
============================================
; Title: Exercise 3.3 - Passing Data to Routes, Part 2
; Author: Professor Krasso
; Date: 06/09/2023
; Modified By: Brooks
; Description: app.routing
============================================
*/

// Add an import for Angular’s built-in Router module
import { Routes } from "@angular/router";

// Add imports for the SignInComponent and HomeComponent
import { HomeComponent } from "./home/home.component";
import { SigninComponent } from "./signin/signin.component";



// Create and export an array of Route objects
export const AppRoutes: Routes = [

  { path: '', component: SigninComponent },
  { path: 'home', component: HomeComponent },

]
