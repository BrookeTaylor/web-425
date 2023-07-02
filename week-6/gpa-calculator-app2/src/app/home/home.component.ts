/*
============================================
; Title: Exercise 6.4 - Input Properties
; Author: Professor Krasso
; Date: 07/02/2023
; Modified By: Brooks
; Description: home component
============================================
*/

import { Component, OnInit } from '@angular/core';

// Add an import statement for the ITranscript interface
import { ITranscript } from '../transcript.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Add a variable named transcriptEntry of type ITranscript
  transcriptEntry: ITranscript;

  // Add a variable named selectableGrades of type Array<string>
  // and assign it the following default values
  selectableGrades: Array<string> = [
    'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'
  ];

  // Add a variable name transcriptEntries of type Array<ITranscript>
  // and set it to an empty array
  transcriptEntries: Array<ITranscript> = [];

  // Add a new variable named gpaTotal of type number
  // and set the initial value to 0
  gpaTotal: number = 0;

  constructor() {

    // In the components constructor create an empty ITranscript object
    // and assign it to the transcriptEntry variable
    this.transcriptEntry = {} as ITranscript;

  }

  // Add a new function and name it saveEntry()
  saveEntry() {

    // In the body of the function push this.transcriptEntry to
    // the transcriptEntries array
    this.transcriptEntries.push(this.transcriptEntry);

    // Next, set this.transcriptEntry as an empty ITranscript object
    this.transcriptEntry = {} as ITranscript;

  }



  // Add a function called calculateResults()
  calculateResults() {

    // Add a local variable named gpa
    let gpa: number = 0;

    // Add a for loop and iterate over the transcriptEntries array
    for (let entry of this.transcriptEntries) {

      // In the body of the loop add a case statement that checks
      // the transcriptEntry.grade and assigns the appropriate value
      switch(entry.grade) {

        case 'A': gpa += 4.00; break;
        case 'A-': gpa += 3.70; break;
        case 'B+': gpa += 3.33; break;
        case 'B': gpa += 3.00; break;
        case 'B-': gpa += 2.70; break;
        case 'C+': gpa += 2.30; break;
        case 'C': gpa += 2.00; break;
        case 'C-': gpa += 1.70; break;
        case 'D+': gpa += 1.30; break;
        case 'D': gpa += 1.00; break;
        case 'D-': gpa += .70; break;
        case 'F': gpa += 0.00; break;

      }

    }

    // Outside the body of the for loop, divide the gpa against
    // the transcriptEntires array length  and assign the results
    // to the gpaTotal variable
    this.gpaTotal = gpa / this.transcriptEntries.length;

  }


  // Add a new function named clearEntries()
  clearEntries() {

    // In the body of the clearEntries function set the transcriptEntries variable
    // to an empty array and set the gpaTotal variable to 0
    this.transcriptEntries = [];
    this.gpaTotal = 0;
  }


  ngOnInit(): void {
  }

}
