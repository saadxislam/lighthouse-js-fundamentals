var umbrella = {
  color: "pink",
  isOpen: true,
  open: function() {
      if (umbrella.isOpen === true) {
          return "The umbrella is already opened!";
      } else {
          umbrella.isOpen = true;
          return "Julia opens the umbrella!";
      }
  },
   close: function() {
    if (umbrella.isOpen === false){
        return "The umbrella is already closed!";
    } else {
        umbrella.isOpen = false;
        return "Julia closed the umbrella";
    }
    }
};
console.log(umbrella.close());
/*
 * Programming Quiz: Facebook Friends (7-5)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `facebookProfile`
 * - The `facebookProfile` object should have the `name` (string), `friends` (number), and `messages` (array of strings) property
 * - Your `facebookProfile` object should have the `postMessage()`, `deleteMessage()`, `addFriend()` and `removeFriend()` method
 * - Carefully implement the desired functionality of each method, as decribed above
 */


// TIP - 
// In an array, 
// - addition at the end is done using push() method
// - addition at a specific index is done using splice() method
// - deletion from the beginning is done using pop() method
// - deletion from a specific index is done using splice() method

// your code goes here
let facebookProfile = {
  name: "Saad",
  friends: 10,
  messages: ["hello", "be my friend", "not really"],
 addFriend: function(){ // add a num parameter here,and replace 1 below with num to increase by as much wanted
   facebookProfile.friends+=1; //add a count of 1 to friends, 
   return facebookProfile.friends;
 },
 removeFriend: function(){//add a num parameter here,and replace 1 below with num to decrease by as much wanted
  facebookProfile.friends-=1; //remove a count of 1 from friends
  return facebookProfile.friends;
 },
 postMessage: function(strings){
   facebookProfile.messages.push(strings);
   return facebookProfile.messages;
 },
 deleteMessage: function(index){ //i'm gonna say the index number
  facebookProfile.messages.splice(index, 1); //from the index number i give, remove the element
  return facebookProfile.messages;
 }
};
console.log(facebookProfile.addFriend());
console.log(facebookProfile.removeFriend());
console.log(facebookProfile.deleteMessage(1));

// Donuts revisited
/*
 * Programming Quiz: Donuts Revisited (7-6)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code sshould have an array named `donuts`
 * - Your `donuts` array should call the `forEach()` method
 * - Your `forEach()` loop should output the donut summaries
 * - BE CAREFUL ABOUT THE PUNCTUATION, SPACES, AND EXACT WORDS TO BE PRINTED.
 */

// This is an array of objects. 
var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];

// your code goes here

donuts.forEach(function(donut){ //donut is each element within the donuts array
  console.log(donut.type+ " donuts cost $" + donut.cost+ " each.") //donut is an object(array?), so can be called using dot notation
});
 
