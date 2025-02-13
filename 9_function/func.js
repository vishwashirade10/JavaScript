//functions

// Regular Function in JS: Regular functions are just functions declared with the function keyword.
function sayHello() {
  console.log("helloworld.");
}
sayHello(); //function call

//Methods: Methods are functions that are associated with an object.
const user = {
  name: "bixby",
  greet: function () {
    console.log("hello", this.name); //this keyword reffers to current object user.
  },
};
user.greet();

//Function Return: A function can return a value using the return keyword.
function sqrt(num) {
  return num * num;
}
let res = sqrt(8);
console.log("res=", res);

//Named Functions: Named functions have a name and are typically declared using the function keyword.
function namedFun() {
  console.log("this is a named function.");
}
namedFun();

//Anonymous Functions: Anonymous functions are functions that do not have a name. They are often used as function expressions.
const anonymous = function () {
  console.log("this is a Anonymous function");
};
anonymous();

//Arrow Functions: Arrow functions are a concise way to write functions in JavaScript. They use the => syntax.
const addition = (a, b) => {
  return a + b;
};
const ans = addition(15, 15);
console.log("ans=", ans);

//Function Expression: A function expression defines a function within an expression(returns something). The function can be anonymous or named.
const multiply = function (x, y) {
  return x * y;
};
console.log("multipy=", multiply(4, 5));

//Arguments: The arguments object is an array-like object available inside all non-arrow functions, containing the passed arguments.
function args() {
  console.log("arguments passed are:", arguments);
}
args(1, 2, 3);
args(1, 2, 3, 4, 5);

//Variadic functions are functions that can accept any number of arguments.
//argument object()
function sumOf() {
  let total = 0;
  let arr = Object.values(arguments); //convert object to array
  arr.forEach((element) => {
    total += element;
  });
  return total;
}
console.log("sumOf", sumOf(1, 2));
console.log("sumOf", sumOf(1, 2, 3, 4, 5));

//RestParameter
function multipleOf(...numbers) {
  total = 1;
  numbers.forEach((num) => {
    total *= num;
  });
  return total;
}
console.log("multipleOf", multipleOf(1, 2));
console.log("multipleOf", multipleOf(1, 2, 3, 4, 5));

//Immediately Invoked Function Expression (IIFE): An IIFE is a function that is defined and immediately invoked.
(function () {
  console.log("IIFE function");
})();

//Generator Function: Generator functions use function* syntax and allow pausing and resuming execution with the yield keyword.
function* counter(stop) {
  let cnt = 1;
  while (cnt <= stop) {
    yield cnt; //The yield keyword is used in generator functions (function*) to pause the function’s execution and return a value.
    cnt++;
  }
}
const numbers = counter(10);
console.log("counter=", numbers.next());
console.log("counter=", numbers.next());
console.log("counter=", numbers.next());
console.log("counter=", numbers.next());

//Async Functions: Async functions return a Promise and are used for handling asynchronous operations. You use the async keyword before the function.
async function fetchData() {
  const response = await fetch("https://reqres.in/api/users?page=2", {
    method: "GET",
    body: null,
  });
  const data = await response.json(); //stops excution until api request is fullfilled
  console.log("data=", data);
}
fetchData();

//https://reqres.in/ :Test  front-end against  real API
