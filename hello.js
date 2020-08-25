const sayHello = function (name) {
  console.log("Hello, " + name);
}
sayHello("Saad");
sayHello("Yasmin");
sayHello("Maa");


//DIFFERENCE BETWEEN CONSOLE & RETURN. FIRST E.G. IS CONSOLE, ONE AFTER IS RETURN:

const sayHelloToConsole = function sayHello (name){
  console.log ("Hello, " + name);
}
sayHelloToConsole("Saad");


const sayHelloToReturn = function sayHi (name){
  return "Hi, " + name;
}
const greeting =  sayHelloToReturn("Saad");// for function expressions, call the variable, not the function name for named function expressions. Conversely, you can also keep the function unnamed.

console.log(greeting);