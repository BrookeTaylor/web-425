/*
============================================
; Title: Exercise 6.2 - Input/Output Properties, Part 1
; Author: Professor Krasso
; Date: 06/28/2023
; Modified By: Brooks
; Description: Wishlist Component
============================================
*/

import { Component, OnInit } from '@angular/core';

// Add an import statement for the IWishlistItem interface
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  // Add a new variable named items of type Array<IWishlistItem> and
  // assign it to an empty array
  items: Array<IWishlistItem> = [];

  constructor() { }

  ngOnInit(): void {
  }

  // Add a new function named updateItemsHandler(item: IWishlistItem)
  updateItemsHandler(item: IWishlistItem) {

    // In the body of the updateItemsHandler add the parameter item
    // to the items array
    this.items.push(item);

  }

}
