/*
============================================
; Title: Exercise 3.4 - Guarding Routes
; Author: Professor Krasso
; Date: 06/09/2023
; Modified By: Brooks
; Description: app.routing - Guarding Routes
============================================
*/

// Add an import for Angular’s built-in Router module
import { Routes } from "@angular/router";

// Add imports for the SignInComponent and HomeComponent
import { HomeComponent } from "./home/home.component";
import { SigninComponent } from "./signin/signin.component";

// Add an import statement for the SignInGuard
import { SignInGuard } from "./sign-in.guard";

// Create and export an array of Route objects
export const AppRoutes: Routes = [

  { path: '', component: SigninComponent },
  { path: 'home', component: HomeComponent,

  // Under the /home path, add an entry for “canActivate” and
  // passin-in the SignInGuard
  canActivate: [SignInGuard]},

]
