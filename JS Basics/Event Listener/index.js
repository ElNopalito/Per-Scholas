//! Different ways to use event listener for button


//! Function for using ID
function printMessage(){
    console.log('Button Clicked');
}

//! This is an alert message. When button is clicked, it will give a small alert box on screen
function alertMe(){
    alert('Button was clicked!')
}

//! Using ID. Use outside of funtion
const button = document.getElementById('click-me')//! Create a variable and attcaches it ID 'click-me'
console.log(button);
button.onclick = alertMe //! using .onclick, everytime the button is clicked, the function alertMe will play

//! Adding multiple event listeners
const multipleBtn = document.querySelector('#multiple')//! Using querySelector so will have to declare class
console.log(multipleBtn);
multipleBtn.addEventListener('click', printMessage)//! This formula is ('action', 'run function')
multipleBtn.addEventListener('click', alertMe)//! You can have multiple events 

//! Div
const box = document.getElementById('box') //! create new var and set it to ID 'box'
console.log(box);

//! Creating new function for event listener arguement
function myEvent(){
    console.log('Hi');
}
//! Every time the mouse hovers, the console will log the myEvent function
box.addEventListener('mouseenter', myEvent)