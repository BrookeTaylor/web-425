/*
============================================
; Title: Exercise 6.4 - Input Properties
; Author: Professor Krasso
; Date: 07/02/2023
; Modified By: Brooks
; Description: app routing module
============================================
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import our components
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { HomeComponent } from './home/home.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [

  // Add a parent path for the BaseLayoutComponet and one
  // child path for the HomeComponent
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  },

  // Add a parent path for AuthLayoutComponent and one
  // child path for the NotFoundComponent
  {
    path: 'session',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'not-found',
        component: NotFoundComponent
      }
    ]
  },

  // Add another path for “catching all invalid URL requests”
  {
    path: '**',
    redirectTo: 'session/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
