//arrays
let nums = [1, 2, 3, 4, 5];
let fruits = ["cherry", "blueberries", "mulberry"];

//method 2
let tags = new Array("html", "head", "title", "body");

//access elements
console.log("tags[0]:", tags[0]);
console.log("tags[3]:", tags[3]);

//properties

//length
let len_arr = [1, 2, 3, 4, 5];
console.log("len of arr:", len_arr.length);

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
