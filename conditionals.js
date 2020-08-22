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

const isCitizen = true;
const age = 21;

if(isCitizen && age > 18){
  console.log("You can vote")
}

const temperature = -60
if (temperature < 40 || temperature > 40){
  console.log("Don't go out")
}

raining = false;
if(!raining){
  console.log("Get wet!")
}