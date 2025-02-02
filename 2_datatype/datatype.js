

// redeclaration is not allowed in (let).
// let n1 = "helloworld"; //redeclaration
// console.log("n1=", n1);
// console.log("type of n1=", typeof n1);

//Datatypes.

//primitive datatypes:

//number
let num1 = 10;
console.log("num1", num1);
console.log("type of num1=", typeof n1);

num1 = 25.000000000057; //max 15 dec precision.
console.log("num1", num1);
console.log("type of num1=", typeof n1);

//String
let name1 = "john carter";
console.log("name=", name1);
console.log("type of name1=", typeof name1);

//boolean
let bool = true; //preferred method
console.log("bool=", bool);
console.log("type of bool=", typeof bool);

bool = false;
console.log("bool=", bool);
console.log("type of bool=", typeof bool);

let bool1 = 1;
console.log("bool1=", bool1);
console.log("type of bool1=", typeof bool1);

//null
let result = null; // default datatype of JS is Object
console.log("result=", result);
console.log("type of result=", typeof result);

result = 10 + 20;
console.log("result=", result);
console.log("type of result=", typeof result);

//undefined
let temp; //nothing is assigned to a variable not even null
console.log("temp=", temp);
console.log("type of temp=", typeof temp);

//non primitive datatypes:

//array
let basket = ["apples", "mangos", "cherry", "bananas", "grapes"];
console.log("basket=", basket);
console.log("basket first item=", basket[0]); //index values to access elements
console.log("type of basket", typeof basket);

//object - key and value pairs
let product1 = {
  product_category: "Biscuits & Cookies",
  product_name: "Britannia Good Day Cashew",
  product_id: 101,
  product_weight: "600gms",
  product_price: 98.0,
};

console.log("product1=", product1);
console.log("product1_name=", product1.product_name); //using dot operator
console.log("product1_name=", product1["product_name"]); //using key as index
console.log("type of product1", typeof product1);

//constants
const PI = 3.142;
console.log("PI=", PI);
console.log("type of PI=", typeof PI);
// PI = 3.141; //reassign causes error.
// console.log("PI=", PI);
