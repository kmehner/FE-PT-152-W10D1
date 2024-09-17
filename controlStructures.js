
// Making conditional statements 
// if
// else if 
// else 

// let age = 25;
let age;
age = 25; 

if (age >= 21){
  console.log("Welcome to the party!")
}

const time = 10; 

if(time<12){
  console.log("Good morning");
}
else if (time<18){
  console.log("Good afternoon");
}
else{
  console.log("Good evening");
}

// Nested if statements 
let isRaining = true;
let umbrellaAvailable = false;

// isRaining == true 
if (isRaining) { 
    if (umbrellaAvailable) {
        console.log("Don't forget your umbrella!");
    } else {
        console.log("It's raining, but you don't have an umbrella.");
    }
} else {
    console.log("No need for an umbrella today!");
}

if (isRaining || !umbrellaAvailable){
  console.log("You probably want to grab your umbrella")
}

if (isRaining && !umbrellaAvailable){
  console.log("Shit outta luck")
}

// Loops (range)
// initialization, condition, iteration (changing value)

for (let i = 0; i < 5; i++){
  console.log("Iteration", i)
}

// While loops 
let count = 0; 

while (count < 5){
  console.log(count); 
  count++;
}

// do...while loop
console.log("Starting do while loop") 

let num = 5; 
do {
  console.log(num);
  num++; 
} while (num < 5); 

// for... in loop 
// Used to iterate over the iterable objects KEYS
// for index in numbers 

console.log("Beginning of for...in loop")

const fruits = ["apple", "cherry", "banana"]
for (const fruit in fruits){
  console.log("Fruit:", fruit)
}

console.log("Beginning of for...of loop")

// for .. of loop 
// Used to iterate over iterable object VALUES
// for num in numbers 

const desserts = ["ice cream", "cake", "chocolate"]
for (const d of desserts){
  console.log("Dessert:", d)
}