// Q1)(if_else)problem: On Time for the Exam
// A student has to attend an exam at a particular time (for example at 9:30 am). They arrive in the exam room at a particular time of arrival (for example 9:40 am). It is considered that the student has arrived on time, if they have arrived at the time when the exam starts or up to half an hour earlier. If the student has arrived more than 30 minutes earlier, the student has come too early. If they have arrived after the time when the exam starts, they are late.

// Write a program that inputs the exam starting time and the time of student's arrival, and prints if the student has arrived on time, if they have arrived early or if they are late, as well as how many hours or minutes the student is early or late.
// Input Data
// Read the following four integers (one on each line) from the console:

// The first line contains exam starting time (hours) – an integer from 0 to 23.
// The second line contains exam starting time (minutes) – an integer from 0 to 59.
// The third line contains hour of arrival – an integer from 0 to 23.
// The fourth line contains minutes of arrival – an integer from 0 to 59.
// Output Data
// Print the following on the first line on the console:

// "Late", if the student arrives later compared to the exam starting time.
// "On time", if the student arrives exactly at the exam starting time or up to 30 minutes earlier.
// "Early", if the student arrives more than 30 minutes before the exam starting time.
// If the student arrives with more than one minute difference compared to the exam starting time, print on the next line:

// "mm minutes before the start" for arriving less than an hour earlier.
// "hh:mm hours before the start" for arriving 1 hour or earlier. Always print minutes using 2 digits, for example "1:05".
// "mm minutes after the start" for arriving more than an hour late.
// "hh:mm hours after the start" for arriving late with 1 hour or more. Always print minutes using 2 digits, for example "1:03".
// Sample Input and Output

// Sample Input :
// 9
// 30
// 8
// 45
// Sample Output :
// Early

let a = { hr: 0, min: 0 }; //arrival
let e = { hr: 0, min: 0 }; //exam
a.hr = 8;
a.min = 40;
e.hr = 9;
e.min = 10;
console.log("arrival time:");
console.table(a);
console.log("Exam time:");
console.table(e);

if (a.hr > e.hr) {
  // arrival hr > exam hr -> late
  console.log("student is Late");
} else if (e.hr == a.hr) {
  // arrival hr == exam hr
  if (a.min > e.min) {
    // arrival min > exam min -> late
    console.log("student is Late");
  }
  if (e.min === 0) {
    //  exam min == 0 -> check (arrival min range(31 - 60))
    if (a.min >= 31 && a.min <= 60) {
      console.log("student is on time");
    }
  }

  if (e.min === 30) {
    //exam min == 30 -> check (arrival min range(0 - 30))
    if (a.min >= 0 && a.min <= 30) {
      console.log("student is on time");
    }
  }
} else if (a.hr < e.hr) {
  // arrival hr < exam hr
  //console.log("hr is less");
  if (e.min == 0) {
    if (a.min >= 30 && a.min <= 60) {
      // check arrival min range(30 - 60)
      console.log("student is on time");
    } else {
      console.log("student is early");
    }
  } else {
    let check = e.min + 30;
    if (a.min >= check) {
      console.log("student is on time");
    } else {
      console.log("student is early");
    }
  }
}
