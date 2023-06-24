/*
============================================
; Title: Exercise 5.2 - Navigation and Layout
; Author: Professor Krasso
; Date: 06/23/2023
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
