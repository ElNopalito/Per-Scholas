//! Loops are ongoing logic so long as the logic remains true.
//! Basic syntax of for loops. It will contain: declaration, condition, incrementation with each seperated by ':'.
//! This statement is saying i is 0 and as long as i > 10, increment the value from i, which is 0. The code will stop at 9 because the condition will no longer be under 10 which is false.



for(let i = 0; i < 10; i++){
    console.log(`i is ${i}`);

//! Adding additional statements to for loops are possible. Using and if statement, we can set have the loop increment but do a specific task at number 2.
if(i===2){
    console.log(`${2} is my lucky number`)
}
}

let msg = 'Fridays are great';
//! .length commands give us the number of characters in our string so the phrase above contains 17 characters.
console.log(msg.length);

//! If we use a for loop using the length command, we are declaring i to be 0 and as long as it is under our string amount(17) it will increment.
//! As we see, it stops incrementing at 16 because that is the highest possible value it can reach to remain true.
for(let i = 0; i < msg.length; i++){
    console.log(i)
}

//! we will now decrease instead of increment as well as run for loops simeltanously

/*for(let i = 0; i <= 10; i++){
    console.log(i **3);
}
//! When running 2 loops, JS will start from loop at top and go bottom.
//! ** is power of number.
for(let i = 10; i >= 0; i--){
    console.log(i **2)
}
//! Infinity loops will happen if the condition can never be met. 
*/
/*
//! While loops state that 'while some statements are true'
//! While loops only take conditions so declation and incrementing/decrement will have to be seperate.
//! Increments in while loops will be under console.log. It must always be under console.log
let i = 0;
//! We will not create another declaration using true or false.
let isLoggedIn = true; // Ask why loop won't start when set to false.
//! We are allowing the loop to count as normal, however when it reaches 5, the loops will break as we indicated.
//! Instead of using break, we can declare isLoggedIn to false at 5, thus breaking the loop still
while(isLoggedIn){
    console.log(`while ${i}`);
    //! ask about continue
    if (i === 5){
        isLoggedIn = false;
        break; //!we can add bnreak as well
    }
    i++
}
/*
//! do while loops 
let i = 10
do {
console.log(i);
i++
}
while(i < 20)
*/