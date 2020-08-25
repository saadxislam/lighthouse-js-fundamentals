/*
function reheatPizza(numSlices) {
  // code that figures out reheat settings!
}


// accepts no parameters! parentheses are empty
function sayHello() {
  var message = "Hello!"
  return message;
}
console.log(sayHello()); 


function findAverage(x, y){
  let answer = (x + y) / 2;
  return answer;
}

let avg = findAverage(5, 9);
console.log(avg);


function laugh(){
  console.log('\"hahahahahahahahahaha!\"');
}
console.log(laugh());
 
let sound = ""; // Declaring a variable called sound as an empty string // using let, which means we can reassign its value
function laugh(num) {
    for (let x = 0 ; x <= num ; x++) {
        sound = sound + "ha" ;  
    }
    sound = sound +"!"; 
    return sound; 
}

console.log(laugh(0)) ;


function isThisWorking(input) {
  console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
  return "Returning: I am returning this string!";
}

isThisWorking(3);


function square(x) {
  return x * x;
}

function subtractFour(x) {
  return square(x) - 4;
}

console.log(subtractFour(5));


function sayHi(name) {
  var greeting = "Hello";
  console.log(greeting + " " + name);
}

sayHi("Julia");



// creates a line of * for a given length
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.

function buildTriangle(whatever){
let repeatBish = "";
for (let i = 1; i <= whatever ; i++) {
repeatBish = repeatBish + makeLine(i);
}
return repeatBish;
}
console.log(buildTriangle(4));
*/
// don't change this code
// emotions() function definition
function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(3));
}

// your code goes here
// Call the emotions() function with two arguments
// Argument 1 - "happy" string
// Argument 2 - an inline function expression
emotions("happy", function (numOf){
  let sound = "";
  for(i = 1; i <= numOf; i++){
  sound = sound + "ha";
}
sound = sound + "!";
return sound;
});
