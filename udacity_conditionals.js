
/*
 * Programming Quiz: What do I Wear? (3-7)
 *
 * Using if/else statements, create a series of logical expressions that logs the size of a t-shirt based on the measurements of:
 *   - shirtWidth
 *   - shirtLength
 *   - shirtSleeve
 *
 * Use the chart above to print out one of the following correct values:
 *   - S, M, L, XL, 2XL, or 3XL
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `shirtWidth`, `shirtLength`, and `shirtSleeve`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should use logical expressions
 * 4. Your code should produce the expected output
 * 6. Your code should not be empty
 * 7. BE CAREFUL ABOUT THE EXACT CHARACTERS TO BE PRINTED.
 */
 


// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 18;
var shirtLength = 28;
var shirtSleeve = 8.13;

/*
 * To gain confidence, check your code for the following combination of [shirtWidth, shirtLength, shirtSleeve, expectedSize]:
 * [18, 28, 8.13, 'S']
 * [19.99, 28.99, 8.379, 'S']
 * [20, 29, 8.38, 'M']
 * [22, 30, 8.63, 'L']
 * [24, 31, 8.88, 'XL']
 * [26, 33, 9.63, '2XL']
 * [27.99, 33.99, 10.129, '2XL']
 * [28, 34, 10.13, '3XL']
 * [18, 29, 8.47, 'NA']
*/

/*// WRITE YOUR CODE HERE
if((shirtWidth >= 18 || shirtWidth < 20) && (shirtLength >= 28 || shirtLength < 29) && (shirtSleeve>= 8.13 || shirtSleeve < 8.38)){
  console.log("S")
}
else if((shirtWidth === 20 || shirtWidth < 22) && (shirtLength === 29 || shirtLength < 30) && (shirtSleeve=== 8.38 || shirtSleeve < 8.63)){
  console.log("M")
}
My code above. Missed the size variable that should've been used, and kept blank. and the size = S. 
later printed size to console outside of function
*/





//let eatsPlants = false;
//let eatsAnimals = false ;

//let category = eatsPlants? (eatsAnimals ? "omnivore" : "herbivore") : (eatsAnimals? "carnivore" : "undefined")
//console.log(category);

// falling through for switch cases 

/*let tier = "deck of legends";
let output = "You'll receive ";

switch(tier){
 case "deck of legends":
 output += "a custom card, ";
 case "collectors deck":
 output += "a signed version of the Exploding Kittens deck, ";
 case "nfsw deck":
   output += "one copy of the NFSW Exploding Kittens card game and ";
default:
  output += "one copy of the Exploding Kittens card game."
}
console.log(output);
*/


// change the value of `education` to test your code
var education = 'a Doctoral degree';

// set the value of this based on a person's education
var salary = 0;

// your code goes here
switch(education){
case "no high school diploma":
salary = 25636;
break;
case "a high school diploma":
salary = 35256;
break;
case "an Associate's degree":
  salary = 41496
  break;
  case "a Bachelor's degree":
    salary = 59124;
    break;
    case "a Master's degree":
    salary = 69732;
    break;
    case "a Professional degree":
      salary = 89960
      break;
      case "a Doctoral degree":
        salary = 84396;
}
console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + "/year")


/*const raining = true
//const cold = false 

if (raining) {
  console.log ("Don't forget your umbrella!");
}
if (cold) {
  console.log ("Make sure you pick out a scarf!");
}
console.log("Now you're ready to go outside")*/

/*
const cold = false;
if (cold){
  console.log("Make sure you pick out a scarf!");
}
else{
  console.log("Short sleeves are fine.");
}
*/

const temp = 12;

if (temp < 0){
  console.log("Get scarf!");
}
else if (temp < 15){
  console.log("Shorts ain't gonna cut it!")
}
else{
  console.log("Shorts are fine");
}


