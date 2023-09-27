//Convert the following identifiers to Camel Case notation:
/*
let some_month = let someMonth;
function the Month() = function theMonth();
let current-month = let currentMonth;
let summer_month = let summerMonth;
let MyLibrary-function = let myLibraryFunction
*/

//Give an example of a numeric literal expression, a string literal expression, a Boolean literal expression, and a null literal expression.
/*
numericLiteral = 2.0;
stringLiteral = "Hello World";
Boolean literal = true;
null literal = null
*/

//Give two examples of complex / variable expressions.
/*
let complex = 3 * 5 + 2;
//Get result for complex variable
console.log(complex)

let age = 29;
let isAdult = age >= 18 ? "Yes" : "No";
//Get result for isAdult
console.log(isAdult)
*/

//Declare 9 variables for the following identifiers. Use Camel Casing and Hungarian Notation: 
/*
const firstName;
const lastName;
let Address;
let City;
let State;
var intZipCode;
var intYourAge;
let referralSource; 
let mayWeContactYou
*/

//Take the 3 of the 9 variables created above and demonstrate 3 ways for declaring and assigning values to those variables.
/*
//using Const:
const firstName = Carlos;
//using Let:
let State = CA;
//using Hungarian Notation:
var intYourAge = 29;
*/

//Create a variable. Add a number and a string and display the coerced result in the browser’s console window.
/*
// Define a number and a string
let number = 10;
let string = "20";
// Add the number and string
let result = number + parseInt(string);
// Display the result in the console
console.log("The result of adding the number and string is:", result);
*/

//Create two variables.
//For the first variable, add a Boolean and a string and display the coerced result.
/*
// Define a boolean and a string
let booleanValue = true;
let stringValue = " is a string.";
// Add the boolean and string. Javascript automatically coerces the Boolean value to a string and performs string concatenation.
let result = booleanValue + stringValue;
// Display the coerced result in the console
console.log("The coerced result of adding the boolean and string is:", result);
*/

//For the second variable, add a number and a Boolean and display the coerced result.
// Define a Number and a Boolean
/*
let numberValue = 10;
let booleanValue = true;
// Add the Number and Boolean. JavaScript automatically coerces booleanValue to a number. true is coerced to 1.
let result = numberValue + booleanValue;
// Display the coerced result in the console
console.log("The coerced result of adding the Number and Boolean is:", result);
*/

//Is the following string literal valid? If not, how would you fix it?
/*
let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."'
console.log(someString);
*/
//String is not valid. Unless we escape first by using the backslash(\) before the apostrophe('), indicating that its part of the string. We can fix by writting this as:
/*
let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."';
console.log(someString);
*/

//Create a variable that produces a null value in the console window.
/*
let nullVariable = null;
console.log(nullVariable);
//Then, create a variable that produces an undefined value in the console window.
let undefinedVariable;
console.log(undefinedVariable)
*/

//Use the unary typeof operator on various literals to return the following types within the console window:
/*
console.log(typeof "Hello");                // Output: string
console.log(typeof 42);                     // Output: number
console.log(typeof true);                   // Output: boolean
console.log(typeof { key: "value" });       // Output: object
console.log(typeof undefinedVariable);      // Output: undefined
*/

//Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows:
//Use 2 concatenation operators to construct this string of text. One after the text “Hello” and a second one after your name and before the comma.
/*
const myName = 'Carlos Serrano'
alert('Hello ' + myName + ', welcome to the JavaScript class!')
*/
//Declare a variable called x and assign it a value of 10.
let x = 10;
//Declare a variable called y and assign it a value of 20.
let y = 20;
//Display the sum of those two numbers in the console window.
