/*
============================================
; Title: Exercise 5.3 - Data Tables
; Author: Professor Krasso
; Date: 06/24/2023
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

  // Add the BooksService to the components constructor
  constructor(private booksService: BooksService) {

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
  }

}
