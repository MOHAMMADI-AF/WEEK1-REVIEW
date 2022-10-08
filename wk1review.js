////////////////////////////////////////////////////////////////
// Conditionals:
///////////////////////////////////////////////////////////////

//1. Write a JavaScript display the larger of two integers

//ANSWER TO Q 1 
//===============

var Book1 = 100
var book2 = 120
if ('Book1 <= Book2') {
  console.log("Book1 is Bigger than Book2");
  } else {
    console.log("Book2 is Smaller than Book1");
  }

//=========================================================================================================  

/* 2. Write an if/else statement for the following requirements:

If student gets 90 or higher: console log  A
If students get 80 or above: console log B
If students get 70 or above: console log C
If students get 55 or above: console log D
Any grade lower than 55 is F */

//ANSWER TO Q 2 
//===============

let Grade = 99
if (Grade >= 90) {
  console.log('Your Grad is A');
} else if (Grade >= 80) {
  console.log('Your Grad is B');
} else if (Grade >= 70) {
  console.log('Your Grad is C');
} else if (Grade >= 55) {
  console.log('Your Grad is D');
} else {
  console.log('Sorry you should Tray Again your Grad is F');
}


//=========================================================================================================  

//3. Write a JavaScript program that displays "Good Morning" if time is between 5AM-11:59 | "Good Afternoon" if time is between 12 - 16 | otherwise "Hey there" 

// between 7 PM and 7 AM respectively

//ANSWER TO Q 3 
//===============

var hour = ('11:40 AM') 
if (hour >= '05:00 AM' || hour <= '11:59 AM') {
    console.log('Good Morning');
} else if (hour >= '12:00 PM' || hour <= '04:00 PM') {
  console.log('Good Afternoon');
} else {
  console.log('Hey There');
}

////////////////////////////////////////////////////////////////
// Strings:
///////////////////////////////////////////////////////////////
// Look up the following string methods!

// Using charAt(), print the letter i in Sabrina
const One = 'Sabrina' 
console.log(`print the letter i in Sabrina '${One.charAt(4)}'`);

//=========================================================================================================  

// Define Unicode in a comment, and get the Unicode using charCodeAt() of the third character in Teddy
const Two = 'Teddy'
console.log(`charCodeAt() of the third character in Teddy '${Two.charCodeAt(3)}'`);

//=========================================================================================================  

// Using fromCharCode() - make it readable for us :). You'll see!
console.log(String.fromCharCode(89, 111, 117, 39, 108, 108, 32, 115, 101, 101));

// Take your first and last name and concat()

//=========================================================================================================  

// Create a string and make it return true using startsWith()
const PSBX = 'PER SCHOLAS'
console.log(PSBX.startsWith('PER'));

//=========================================================================================================  

// Now use any variable with endsWith() and return false
const PSNY = 'PER SCHOLAS'
console.log(PSNY.endsWith('NY'));

//=========================================================================================================  

// Finish the following sentence. Use includes() and return true.
const ozgur = 'Once upon a time Ozgur looked up at the Moon, '
console.log(ozgur.includes('Moon'));

//=========================================================================================================  

// Help! I'm looking for my cow! Using indexOf() help Josh find his cow. What's the index of cow?
const joshHadALittleLambOopsCow = "Josh lives in a farm. Josh was overwhelmed with coding. Josh is stressed out. Josh fed the chickens this morning. He watered his plants. He took his cow Betsy on a walk. Josh went home without Betsy. Josh went to bed that night, and realized he went home alone."
console.log(joshHadALittleLambOopsCow.indexOf('cow'));

//=========================================================================================================  

////////////////////////////////////////////////////////////////
// Boolean:
///////////////////////////////////////////////////////////////

// I just want my dreams to come true. 
// With the powers of logical and comparison operators, PRINT TRUE please!
// Replace the underscores.

const a = 5;
const b = 10;
const c = 15;
const d = "Keke"

console.log(a < b)
console.log(c > b)
console.log(d == d)
console.log(d !== a)
console.log(a != 15)
console.log(a < b < c)
console.log(c > b > a !== d)

//=========================================================================================================  


////////////////////////////////////////////////////////////////
// Loops:
///////////////////////////////////////////////////////////////
// Ken has a headache today and he said the room has been spinning like crazy. Make Ken's room spin 10 times using FOR LOOP. Make him print a sentence.

let spin = 10;
for (let spin = 1; spin <= 10;) {
  console.log('The room is still spinning!');
  spin++
}

//=========================================================================================================  

//Harry said that was so mean of Teo to do Ken dirty like that. Make Teo's vision spin 20 times FOR LOOP.
let spin2 = 10;
for (let spin2 = 1; spin2 <= 20;) {
  console.log(spin2, 'The room is still spinning!');
  spin2 = spin2 + 1;
}

//=========================================================================================================  

// But wait! Lisa said, while Teo is spinning 20 times. Let's make him say "I'm sorry". Print I'm sorry 20 times using a WHILE loop.
let counter = 1;
while (counter <= 20) {
  console.log(counter, "I'm sorry");
  counter = counter + 1;
}

//=========================================================================================================  

// For the next three, look for the syntax of FOR IN and FOR OF loop. Very easy to understand syntax, and very clean :) 

// To The Left! To The Left! Everything I want in the console to the left. Print thing1, thing2, thing 3 using (FOR IN LOOP)
const whateverQueenBeySaid = {
  thing1: 'shoes',
  thing2: 'clothes',
  thing3: 'gaming console'
};
for(const prop in whateverQueenBeySaid) {
  console.log(prop + ':' + whateverQueenBeySaid[prop]);
}

//=========================================================================================================  

  // Using (FOR IN LOOP), print the indexes of the array.
  const lana = ['l', 'a', 'n', 'a']
  console.log('l','a','n','a');

  //=========================================================================================================  

  
  // USE (FOR OF LOOP)!
  const tia = ['teo', 'the', 'syntax', 'of', 'this', 'is', 'cleaner']
  console.log('this', 'is', 'cleaner');

//=========================================================================================================  


  // Look into forEach() loop, it accepts a callback aka a function inside a function. 
  // Swathi said don't forget each person. No person left behind! Use forEach() to iterate over the array perscholas. Inside the function, create a variable with the string "PS". Print their name in the console concatenated with the variable. //??
  const perscholas = ['Amira', 'Arely', 'Jonathan']

  //=========================================================================================================  


////////////////////////////////////////////////////////////////
// Arrays:
///////////////////////////////////////////////////////////////

// Look up the following: Make a note of what each one of these methods do
// push()
// pop()
// unshift()
// shift()
// concat()
// splice()
// slice()
// sort()
// includes()
// indexOf()
// length

//=========================================================================================================  

/* You've been tasked to do this week's grocery shopping. As you arrive at Times Supermarket, Raphael pings you to get a bottle of Hendricks gin. Add this to the existing shoppingList and console.log it.*/
var shoppingList = [

  "cool ranch doritos",

  "kings hawaiian sweet bread",

  "peanut butter oreos",

  "fruit loops cereal"

];
shoppingList.push("Hendricks gin")
console.log(shoppingList)

//=========================================================================================================  


//3.  Use the force, or in this case the reverse method to help Yoda make some sense with his motivational talk to the young Jedi interns.*/

var yoda = ["try", "no", "is", "there", "not", "do", "or", "do"];
rev=yoda.reverse();
console.log(rev);

//=========================================================================================================  


//4. People been lining up for hours to get the newest iphone release. Help manage the unruly crowd of privileged customers by serving them one at a time and assiging it to a variable named `nowServing`. Console.log this new variable as well as the waitList.*/

var waitList = [ "Chance the Rapper", "Khalid", "Tay-Tay", "Barry Manilow", "Piko Taro" ];

//=========================================================================================================  


//5. Help Nike sell more overpriced sneakers by changing their slogan from an array into a string. Convert the shoe array and assign it to a variable named `shoeString`. Console.log this new variable.

var shoe = ["just", "do", "it"];

// ===== SPREAD OPERATOR ===== 

// Create a variable and assign a value of a copied array using the spread operator

//=========================================================================================================  


// Create two arrays with any elements and connect both of them using the spread operator. Save the connected arrays into a new variable.

//=========================================================================================================  

////////////////////////////////////////////////////////////////
// Functions:
///////////////////////////////////////////////////////////////

// Don't forget to CALL your functions

//1. Write a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
function maxOfTwoNumbers(num1, num2) {
  console.log(Math.max(num1, num2));
}
maxOfTwoNumbers(5, 8)

//=========================================================================================================  


//2. Write a function maxOfThree that takes three numbers as arguments and returns the largest of them.
function maxOfThree(num1, num2, num3) {
  console.log(Math.max(num1, num2, num3));
}
maxOfThree(5, 8, 12)

//=========================================================================================================  


//3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise

//4. Write a function charCount that takes a string and returns the length of the string.

//5. Write a function vowelCount that takes a String and returns the number of vowels in the String. Add a check for the string to be of 10 or less characters.

