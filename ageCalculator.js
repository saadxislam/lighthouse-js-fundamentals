
/*
function ageCalculator (name, yearOfBirth, currentYear){
let age = currentYear - yearOfBirth;
return name + ' is ' + age + ' years old.'
}
console.log(ageCalculator("Miranda", 1983, 2015))
*/
/*
function howManyHundreds(num){
  let x = 0;
  x = (num- (num%100))/100
  return x;
}
console.log(howManyHundreds(823));
*/

function calculateRectangleArea(length, width){
if (length < 0 || width <0){
return undefined;
}
return length * width;
}
function calculateTriangleArea(base, height){
if (base < 0 || height <0){
  return undefined;
  }
return (base * height)/2;
}
function calculateCircleArea(radius){
if (radius < 0){
  return undefined;
  }
return 3.14159 * (radius*radius);
}
console.log(calculateRectangleArea(-2,2));