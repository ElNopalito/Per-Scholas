
//! Function require declaration and call
//! A parameter is a variable inside function
//! Inside the parameter, you can declare a variable but the function call will always take priority 
function greet(username){
    console.log(`Hello ${username}`)
}
//! When passing value in function call from function declaration, it is called and arguement.
//! Function call
//! Strings will always require ''
greet('An')
//! function countdown
//! If function call is empty, we can manually adjust value in fucntuon declaration for default value.
function countDown(number = 10){
    for(let i = number; i > 0; i--){
        console.log(i)
    }
}
countDown()
//! Function expression

const square = function(value){
    console.log(value * value)
}

square(2)

//! Arrow function
//! returning is the same as console.log in fucntion
const add = (value1, value2) => {
    if(value1 === 0){ 
    return `first value was 0`;
    }
    //! Must use keyword return to get function call to work. 
    console.log(value1 + value1)
    return value1 + value2
}
add(2,2)
let result = add(0,3)
console.log(typeof result);
console.log(result + 10);


function isPrime(numberToCheck){
    for (let i = 2; i < numberToCheck; i++)
    if (numberToCheck <= 1){
        console.log('not prime');
        break
    }

}

console.log('prime number')