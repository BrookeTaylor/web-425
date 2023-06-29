/*
============================================
; Title: Exercise 6.2 - Input/Output Properties, Part 1
; Author: Professor Krasso
; Date: 06/28/2023
; Modified By: Brooks
; Description: IBook interface
============================================
*/

export interface IBook {
  isbn: string;
  title: string;
  authors: Array<string>
  description: string;
  numOfPages: number;
}
