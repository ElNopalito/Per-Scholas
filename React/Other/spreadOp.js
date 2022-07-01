//!-------------------------------------------------------------------------------Spread Operator----------------------------------------------------
let arr1 = [1,2,3]

//! using the spread operator '...', you can set arr2 to have arr1's value. Keep in mind that it is not the same array. You can add further value to arr2 as well.
let arr2 = [...arr1, 6,7,8,9]


//!---------------------------------------------------------------------------------Destructuring----------------------------------------------------
//! Destructuring Objects
const person = {name:'An',
                age:'25',
                location: 'Atlanta'
                }

//! In the past, we would use dot notation like person.name to get a specfic piece of info from an array. Now, we can use what's called destructuring with the syntax below. We can also call upon multiple values of the array
const { name, age, location } = person
//! We would have to console each property individually however. 
// console.log(name);
// console.log(age);
// console.log(location);


//! Destrructuring Arrays 
//! In this, we are creating an initial array with the object devs. After, we use destructuring to assign the array to value of 'devs'. If we console log each array index, it will come with the inital array on the line 26
//! So if we were to change even one array property like in like 27, it's An instead of Jaime, the console will still show Jaime because Jaime = devs[1]
const devs = ['Jabes', 'Jaime', 'G', 'Ainur']
const [jabes, An, g, ainur] = devs

console.log(devs);
console.log(jabes);
console.log(jaime);
console.log(g);
console.log(ainur);