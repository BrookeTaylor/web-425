/*
============================================
; Title: Exercise 6.2 - Input/Output Properties, Part 1
; Author: Professor Krasso
; Date: 06/28/2023
; Modified By: Brooks
; Description: books service
============================================
*/

import { Injectable } from '@angular/core';

// Import the Observable class from rxjs and of
import { Observable, of } from 'rxjs';

// Import the map operator from rxjs
import { map } from 'rxjs/operators';

// Import the IBook interface
import { IBook } from './book.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  // Add a books variable of type Observable<IBook>
  books: Array<IBook>;

  constructor() {


    // In the services constructor, create 5 new book objects and
    // prefill them with your favorite books.
    this.books = [
      {
        isbn: '0307337979',
        title: "Cesar's Way: The Natural, Everyday Guide to Understanding and Correcting Common Dog Problems",
        authors: ['Cesar Millan'],
        description: 'In Cesar’s Way, he shares this wisdom, laying the groundwork for you to have stronger, more satisfying relationships with your canine companions.',
        numOfPages: 298,
      },
      {
        isbn: '142621328X',
        title: "Cesar Millan's Short Guide to a Happy Dog: 98 Essential Tips and Techniques",
        authors: ['Cesar Millan'],
        description: 'Cesar Millan has a new mission: to use his unique insights about dog psychology to create stronger, happier relationships between humans and their canine companions.',
        numOfPages: 208,
      },
      {
        isbn: '0307716872',
        title: "Cesar's Rules: Your Way to Train a Well-Behaved Dog",
        authors: ['Cesar Millan'],
        description: 'Cesar Millan shows you how to communicate well with your dog and shares the most effective and humane methods for teaching your dog how to be a happy, well-behaved member of your household.',
        numOfPages: 320,
      },
      {
        isbn: '0307461300',
        title: "How to Raise the Perfect Dog: Through Puppyhood and Beyond",
        authors: ['Cesar Millan'],
        description: 'How to Raise the Perfect Dog is like having Cesar right beside you, as your own personal expert, coaching you and your dog from the first day of your life together.',
        numOfPages: 320,
      },
      {
        isbn: '0307408914',
        title: "A Member of the Family: Cesar Millan's Guide to a Lifetime of Fulfillment with Your Dog",
        authors: ['Cesar Millan'],
        description: "Brimming with practical tips and techniques,A Member of the Familyaddresses the most common issues and questions that emerge over the course of a person's lifetime relationship with a dog, explaining what it takes to be a good dog owner.",
        numOfPages: 302,
      },
    ]

  }


  // Create two new functions: getBooks() and getBook(isbn: string)

  // Set the return type to an Observable Array of IBook objects
  getBooks(): Observable<IBook[]> {

    // Cast the books array to an observable and return them
    return of(this.books);

  }


  // Set the return type to IBook
  getBook(isbn: string): IBook {

    // Loop over the array of books and return a book matching
    // the passed-in isbn number
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }

  }



}
