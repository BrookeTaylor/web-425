/*
============================================
; Title: person.class.ts  
; Author: Professor Krasso 
; Date: 05/23/2023
; Modified By: Brooks
; Description: Logs my name using our person.interface. 
============================================
*/ 

import { IPerson } from './person.interface';

class Person implements IPerson {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {

        this.firstName = firstName;
        this.lastName = lastName;

    }
}

let myName = new Person("Brooke", "Taylor");

console.log(`My name is ${myName.firstName} ${myName.lastName}`);