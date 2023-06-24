/*
============================================
; Title: Exercise 5.3 - Data Tables
; Author: Professor Krasso
; Date: 06/24/2023
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
