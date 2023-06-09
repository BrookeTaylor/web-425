/*
============================================
; Title: Exercise 3.2 - Passing Data to Routes, Part 1
; Author: Professor Krasso
; Date: 06/08/2023
; Modified By: Brooks
; Description: app.module
============================================
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Link each component: composer-list, about, contact to the top navigation links
import { ComposerListComponent } from './composer-list/composer-list.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ComposerDetailsComponent } from './composer-details/composer-details.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ComposerListComponent,
    AboutComponent,
    ContactUsComponent,
    ComposerDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
