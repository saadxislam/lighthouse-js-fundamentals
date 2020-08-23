/*
 * Programming Quiz: JuliaJames (4-1)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `x` with a starting value of `1`
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should use a conditional statement
 * - Your code should increment `x` by `1` each time the loop executes
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */
 
/*var x = 1;

while (x <= 20) {
    if (x%3=== 0 && x%5 === 0){
    console.log("JuliaJames");
    x= x+1;
    }
    else if(x%5 === 0){
      console.log("James");
      x= x+1;
    }
    else if(x%3 === 0){
      console.log("Julia");
      x= x+1;
    }
    else{
      console.log(x)
      x= x+1;
    }
}
console.log(x);
*/

/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `num` with a starting value of `99`
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */


/*
 var num = 99;

while (num >= 1) {
    if (num === 1){
      console.log(num + " bottle of juice on the wall! " + num + " bottle of juice! Take one down, pass it around... " + (num - 1) + " bottles of juice on the wall!")
    }
    else if(num === 2){
      console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num - 1) + " bottle of juice on the wall!")
    }
    else if(num === 1){
      console.log(num + " bottle of juice on the wall! " + num + " bottle of juice! Take one down, pass it around... " + (num - 1) + " bottles of juice on the wall!")
    }
   num =- 1;
}
*/

/*
let task;
let time = 60;

while(time >= 0){
  if(time === 50){
    console.log("Orbiter transfers from ground to internal power");
  }
  else if(time === 31){
    console.log("Ground launch sequencer is go for auto sequence start");
  }
  else if(time === 16){
    console.log("Activate launch pad sound suppression system");
  }
  else if(time === 10){
    console.log("Activate main engine hydrogen burnoff system");
  }
  else if(time === 6){
    console.log("Main engine start");
  }
  else if(time === 0){
    console.log("Solid rocket booster ignition and liftoff!");
  }
  else{
    console.log("T-" + time + " seconds")
  }
  time= time - 1;
}
*/

let solution = 1;

for (let i = 12; i >= 1; i--) {
  solution *= i;
}

console.log(solution);