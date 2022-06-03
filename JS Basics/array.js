
// Array declaration
const myArray = [23, 4, 45, 23, 345, 56, 234]
const myStringArray = ['banana', 'apple', 'orange']
const mixedValue = [22, 'monday', true, null, ['friday'], {a:1, b:2}]
const likes = ['alex', 'abe', 'carla']

//! The .length command allows to the allocation and finding of how many variables are in the array.
//! The array is set to count from a 0 index. So meaning the first number to count will be 0
console.log(likes.length);

// const myOtherArray = new Array(1,2,3,4)

console.log(myArray[2]);
// console.log(Array.isArray(myArray));
console.log(myArray);
//! You can find the length of an array content by using .legnth. 
//! In the case below, it is subtracting 1 variable and replacing it with 3000
//! So it would replace 234 with 3000 and have only 6 variable/
myArray[myArray.length -1] = 3000
console.log(myArray);

console.log(myStringArray[2]);

const numbersArr = [11, 22] // empty array
numbersArr.push(55) //! This pushes or adds a variable to the end of an array.
numbersArr.unshift(33) //! This pushes or adds a variable to the beginning of an array

console.log(numbersArr);
numbersArr.pop() //! This removes the last variable in an array and returns it.
console.log(numbersArr);
numbersArr.shift() //! This removes the first variable in an array and returns it.
//! To get a returned variable from either pop or shift use formula below.

console.log(numbersArr);
value = numbersArr.shift;
console.log(value)