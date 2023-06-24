/*
============================================
; Title: Exercise 5.3 - Data Tables
; Author: Professor Krasso
; Date: 06/24/2023
; Modified By: Brooks
; Description: app module
============================================
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BookListComponent } from './book-list/book-list.component';


// Add import statements
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';

// Add an import statement for MatTableModule
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Add the imported modules to the imports array
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    FlexLayoutModule,
    MatIconModule,
    // Add the MatTableModule to the imports array
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
