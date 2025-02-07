//arrays
let nums = [1, 2, 3, 4, 5];
let fruits = ["cherry", "blueberries", "mulberry"];

//method 2
let tags = new Array("html", "head", "title", "body");

//access elements
console.log("tags[0]:", tags[0]);
console.log("tags[3]:", tags[3]);

//modify
tags[2] = "style";
console.log("tags=", tags);

//properties

//length
let len_arr = [1, 2, 3, 4, 5];
console.log("len of arr:", len_arr.length);

//indexof()
let fruitbasket = [
  "apple🍎",
  "watermelon🍉",
  "cherry🍒",
  "mulberry🫐",
  "strawberry🍓",
];
console.log("indexOf(mulberry)=", fruitbasket.indexOf("mulberry"));

//push()
let arr1 = [1, 2, 3];
arr1.push(4);
console.log("push arr1=", arr1);

//pop()
arr1.pop();
console.log("pop arr1=", arr1);

//shift() : removes and returns the first element
let temp = arr1.shift();
console.log("shift arr1=", arr1);
console.log("temp=", temp);

//unshift() : adds one or more elements at the start of the list
arr1.unshift(1);
console.log("unshift arr1=", arr1);
arr1.unshift(6, 5);
console.log("unshift arr1=", arr1);

//foreach()
fruitbasket.forEach(function (fruit) {
  console.log(fruit + " is a fruit.");
});

//map() - Creates a new array populated with the results of calling a function on every element in the original array

let bigfruits = fruitbasket.map((fruit) => fruit.toUpperCase());
console.log("bigfruits=", bigfruits);
console.log("type of bigfruits:", typeof bigfruits);

//filter() - Creates a new array with all elements that pass a test.
let num = [69, 37, 73, 2, 74];
let arrsmall = num.filter((n) => n <= 50);
console.log("arrsmall", arrsmall);

//2d array
let arr2d = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("2d arr:", arr2d);

//Spread Operator - Allows you to copy the elements of an array into a new array.
let fruits2 = [...bigfruits];
console.log("fruits2:", fruits2);

//Array Destructuring - Allows you to unpack values from arrays into distinct variables.
let [f1, f2] = bigfruits;
console.log("f1:", f1);
console.log("f2:", f2);

//concat()
let nums1 = [1, 2];
let nums2 = [3, 4];
let combo = nums1.concat(nums2);
console.log("combo=", combo);

//reduce() method in JavaScript is used to reduce an array to a single value by applying a function to each element of the array. It takes a callback function and an optional initial value.
let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((accumulator, current_val) => {
  return accumulator + current_val;
}, 0);
console.log("sum=", sum);
/* working
inital val 0 
add 1(firstElement) to (previous output)0 -> 1
add 2(secondElement) to (previous output)1 -> 3
add 3(thirdElement) to (previous output)3 -> 6
add 4(fourthElement) to (previous output)6 -> 10
add 5(fifthElement) to (previous output)10 -> 15
*/

//find() - Finds the first element that satisfies the provided testing function
numbers = [1, 2, 3, 4, 5];
let found = numbers.find((num) => num > 2);
console.log("found=", found);

//some() - Checks if at least one element passes the test
let some = numbers.some((num) => num % 2 == 0);
console.log("some=", some);

//every() - Checks if all elements pass the test
let every = numbers.every((num) => num % 2 == 0);
console.log("every=", every);

//slice() - Returns a shallow copy of a portion of an array
let slice = numbers.slice(1, 3);
console.log("slice=", slice);

//sort() - Sorts the array in place
let uns = [28, 33, 32, 53, 8];
console.log("uns=", uns);
uns.sort((a, b) => a - b); //ascending
console.log("uns=", uns);
uns.sort((a, b) => b - a); //descending
console.log("uns=", uns);

//reverse() - Reverses the array in place
uns = [28, 33, 32, 53, 8];
uns.reverse();
console.log("reverse uns=", uns);

//flat() - Flattens a multi-dimensional array
let array = [1, [2, 3], [4, 5]];
let flatarr = array.flat();
console.log("flat arr=", flatarr);

//includes() - Checks if an array contains a specific element
array = [1, 4, 8];
let inc = array.includes(4);
console.log("inc=", inc);
