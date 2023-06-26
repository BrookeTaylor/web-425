/*
============================================
; Title: Exercise 5.4 - Dialogs
; Author: Professor Krasso
; Date: 06/25/2023
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
