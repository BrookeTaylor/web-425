"use strict";
/*
============================================
; Title: person.class.ts
; Author: Professor Krasso
; Date: 05/23/2023
; Modified By: Brooks
; Description: Logs my name using our person.interface.
============================================
*/
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
let myName = new Person("Brooke", "Taylor");
console.log(`My name is ${myName.firstName} ${myName.lastName}`);
