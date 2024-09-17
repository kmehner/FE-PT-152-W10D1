/*

Types of variables
 Var, Let, Const

 Var: 
  - Generally avoided but still useful sometimes (Let and const were introduced in ES6 and are preferred)
  - FUNCTION SCOPE - they are accessible throughout the function in which they are declared 
  - Can be re-declared and updated in the same scope without generating an error
  - Subject to HOISTING - they are moved to the top of the function or global scope

  Let:
  - Declare block-scoped variables -> block-scoped variables are only accessible within the block in which they are declared
  - Cannot be re-declared in the same scope
  - Can be reassigned
  - Not subject to hoisting -> they are not accessible before their declaration in the code 

  Const:
  - Block-scoped variables that cannot be reassigned
  - Constant must be assigned a value when declared and this value cannot be changed later 
  - Not hoisted 

  */

// Variable declaration and assignment 
var ourName = "Coding Temple";
let greeting = "Hello";
const PI = 3.14; 

console.log(greeting);
console.log(PI)

greeting = "Bye"; 
console.log(greeting); 

// Hoisting 
// console.log("This is num " + num); 

// for number in range 10 
for (const num=0; num <= 10; num++){
  console.log(num);
}


// PI = 3; 
// console.log(PI)

/* DATA TYPES
- Strings: Text enclosed in single or double quotes.
- Numbers: Numeric values, including integers and floating-point numbers.
- Booleans: Represents true or false values.
- Arrays: Ordered collections of data.
- Objects (Dictionaries): Key-value pairs representing complex data structures.
*/

let personName = "John"; // String
let numCats = 30; // Number
let isHappy = true; // Boolean
let likedFruits = ["apple", "banana", "orange"]; // Array
let personComplete = { name: "Alice", age: 25 }; // Object

//  Javascript determines the data type DYNAMICALLY - the data type of a variable is determined at runtime
/* PRIMITIVE DATA TYPES
- String: Represents text data.
- Number: Represents numeric data.
- Boolean: Represents true or false values.
- Undefined: Represents an undefined value.
- Null: Represents an empty value.
- Symbol: Represents a unique value.
*/

// OBJECT DATA TYPE: Represents complex data structure. A collection of key-value pairs where keys are strings 
// and values can be of any data type.

let alice = {name: "Alice", age: 25};

// ARRAY DATA TYPE: subtype of object data type 
// Ordered collection of data. Each element in an array is assigned a unique index starting from 0.
// It's variables are recognized as OBJECTS

let numbers = [1, 2, 3, 4, 5];

// FUNCTION DATA TYPE: subtype of object data type
// Represents a reusable block of code that can be executed multiple times.
// The variable's data types are recognized as FUNCTION

function greet(name) {
  console.log("Hello, " + name);
}

greet("Alice");

function greetFullName(first, last){
  console.log(first + " " + last)
}

greetFullName("John", "Doe")

// Same function in python
// def greet(name):
//   print("Hello " + name)


// OPERATORS: Used to perform operations on variables and values.
/* 
- Arithmetic Operators: +, -, *, /, %
  The % operator is used for finding the remainder of a division operation (also known as the modulo operator).
- Assignment Operators: =, +=, -=, *=, /=, %=
  = assigns it directly to the value 
  count = 15 
  count += 1 
  // Count = 16 
- Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
  The == operator checks if two values are equal in value, but it performs type coercion (We will get more into this) if the types are different.
  The === operator checks if two values are equal in both value and type.
  The !== operator checks if two values are not equal in value or type.
- Logical Operators: &&, ||, !
  The && (logical AND) operator returns true if both operands are true.
  The || (logical OR) operator returns true if at least one of the operands is true.
  The ! (logical NOT) operator returns the opposite of the operand.
*/

let a = 5;
let b = 3;
let total = a + b; // Addition
let isAGreaterThanB = a > b; // Comparison
let isItValid = true && false; // Logical

// Declare variables
// let name = "John";
// let age = 30;
// let isStudent = true;
// let fruits = ["apple", "banana", "orange"];
// let person = { name: "Alice", age: 25 };


// TYPEOF CONVERISON: Used to determine the data type of a variable or value.
// The typeof operator returns a string indicating the type of the operand.

let name = "John";
console.log(typeof name); // string

// NOTE: we need to be mindful of loose equality (==) and strict equality (===) when comparing data types.
// Loose equality (==) performs type coercion, while strict equality (===) does not.
// Type coercion is the process of converting value from one data type to another.

console.log(typeof 42); // Output: "number"
console.log(typeof "Hello, world!"); // Output: "string"
console.log(typeof true); // Output: "boolean"

// NOTE: The typeof operator returns "object" for objects, arrays, and null.

console.log(typeof { name: "John", age: 30 }); // Output: "object"
console.log(typeof [1, 2, 3]); // Output: "object"
console.log(typeof undefined); // Output: "undefined"
console.log(typeof null); // Output: "object"

console.log(5 + "5"); // Output: "55" (Number to String Conversion)
console.log("10" - 5); // Output: 5 (String to Number Conversion)
console.log("true" == true); // Output: true (String to Boolean Conversion)
console.log(+"100"); // Output: 100 (String to Number Conversion)

console.log(0 == false); // Output: true
console.log("" == false); // Output: true
console.log(0 === false); // Output: false (Strict Equality Check)
console.log("" === false); // Output: false (Strict Equality Check)