/*
============================================
; Title: Exercise 5.4 - Dialogs
; Author: Professor Krasso
; Date: 06/25/2023
; Modified By: Brooks
; Description: book-list component
============================================
*/

import { Component, OnInit } from '@angular/core';

// Add an import statement for IBook interface
import { IBook } from '../book.interface';

// Add an import statement for Observable
import { Observable } from 'rxjs';

// Add an import statement for the BooksService
import { BooksService } from '../books.service';

// Add an import statement for the MatDialog
import { MatDialog } from '@angular/material/dialog';

// Add an import statement for the BookDetailsDialogComponent
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  // Create a books variable of type Observable<IBook[]>
  books: Observable<IBook[]>;

  // Create a variable named header of type Array<string
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors'];

  // Create a variable named book of type IBook
  book: IBook;

/**
 * Add the BooksService to the components constructor
 *
 * Add the MatDialog class to the components constructor
 */
  constructor(private booksService: BooksService, private dialog: MatDialog) {

    // In the components constructor call the booksService.getBooks() function
    // and assign the results to the books variable
    this.books = this.booksService.getBooks();
  }

  ngOnInit(): void {
  }


  // Create a function called showBookDetails(isbn: string)
  showBookDetails(isbn: string) {

/**
 * In the body of the showBookDetails(isbn: string) function make a call
 * to the booksService.getBook(isbn: string) and map the return object to
 * the book variable
 */
    this.book = this.booksService.getBook(isbn);

    // console.log() the book object (we are doing this to test that
    // the service is returning the correct book object)
    console.log(this.book);


    // create a dialogRef object and assign it to the dialog.open() function
    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {


/**
 * In the body of the open() function create a new object literal
 * called data and a nested object literal called book and assign it
 * the book variable
 */
      data: { book: this.book },
      disableClose: true,
      width: '800px'

    });

    // Call the afterClosed() function and set the book variable to null
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.book = null;
      }
    });



  }

}
