// is set to 100
let id = '100';

//! performs type conversion
//if (id==100){
  //  console.log('Correct')
//}*/

//! === checks for value and type
//! use === by default
//if (id !== 100){
   // console.log('correct')
//}

let userName;

//! Checks for undefined
/*if(userName !== undefined){
  //  console.log(`Hello, ${userName}`)
}
    else {
   // console.log('Please log in')
}

let firstName = 'An'
//! The following formual allows for a random number to be generated.
//! Math.floor rounds a number down and Math.random generates a random interger from 0 to 1
//! Then, we multiply it by 100 to make it a whole number if it is a decimal.
let age = Math.floor(Math.random() * 100)
//! After including formula, we print out our results with console.log.
console.log(age)
//!  && means and || means or
if (age > 0 && age < 13){
    console.log(`${firstName} is a child`)
} 
//! Else if statements add on to the if statement
else if (age > 13 && age <= 19){
    console.log(`${firstName} is not a child`)
}
//! else statements are the opposite of if. 
//! basically stating "otherwise"
else{
    console.log(`${firstName} is an adult`)
}


//! Iteneray operator are used to shorten if else statements only if there are two conditions.
let userId = 11;
//! Below, it is asking if userId is 11 by using question mark
//! If it is, print yes.
//! Else, print no. Else is identified using ':'.
//! In this case, it is so it will print yes.
console.log( userId === 11 ? 'yes' : 'no' )*/

function isPrime(numberToCheck){
  for (let i = 2; i < numberToCheck; i++)
  if (numberToCheck <= 1){
      console.log('not prime');
      break
  }

}

console.log('prime number')