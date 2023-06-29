/*
============================================
; Title: Exercise 6.2 - Input/Output Properties, Part 1
; Author: Professor Krasso
; Date: 06/28/2023
; Modified By: Brooks
; Description: Wishlist Create component
============================================
*/

// Add Output and EventEmitter to the “Component, OnInit” statement
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

// Add an import statement for the IWishlistItem
import { IWishlistItem } from '../wishlist-item.interface';


@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.scss']
})
export class WishlistCreateComponent implements OnInit {

  // Add an output statement named addItemEmitter of type EventEmitter<IWishlistItem>
  @Output() addItemEmitter = new EventEmitter<IWishlistItem>();

  // Add a variable named item of type IWishlistItem
  item: IWishlistItem;

  constructor() {

    // In the component’s constructor create a new instance of
    // the IWishlistItem object
    this.item = {} as IWishlistItem;

  }

  ngOnInit(): void {
  }


  // Add a new function called “addItem()”
  addItem() {

    // In the body of the addItem function create a new object literal
    // of type IWishlistItem and call the addItemEmitter to emit the object
    this.addItemEmitter.emit({
      title: this.item.title,
      authors: this.item.authors
    });

    // Next, set the item object to an empty object
    this.item = {} as IWishlistItem;

  }

}
