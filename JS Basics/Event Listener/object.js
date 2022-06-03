const button = document.querySelector('button')//! Creating var and assigning to <button>. It seems to bet better to use querySelector for this
button.addEventListener('click', function(event){//! Creating eventListener with function in it
console.log(event);
const li = document.createElement('li')//! We are creating a new element <li>
console.log(li); //! We are logging this element in the console. As it is still within the function which is in the eventListener, it will ultimately belong to the eventListener.
const input = document.querySelector('input')//! Create new var and assign it to input box
console.dir(input); //! This allows us to see what we have in the input. If we type something in the box, it will be in the value property.
li.textContent = input.value //! We are displaying the textContent of li by setting it the value property of variable 'input'
console.log(li.textContent);
const ul = document.querySelector('ul')//! Creating new var and assigning it to <ul>
ul.appendChild(li)//! We are shoving the var 'li' that we created in the ul var (<ul>). NOTE: This the li we created, not the ones already made in the HTML
input.value = ''//! This allows us to reset the input after a comment is added in the bubble.
})
//!--------------------------------------Event Bubbling-----------------------------------------------
//! This example represents Event Bubbling. When a function is created from a child, it will bubble all the way up to the paremnt- grandparent-etc.
//! In this example, we are created and assigning car ul to the <ul> in HTML. Under the <ul> is SEI Rocks written in between the <li> tags.
//! Because the <li> are children of the <ul>, if I click on SEI Rocks, it will run the function below but will also run up to the <ul> even though SEI Rocks is in the <li>
const ul = document.querySelector('ul')
ul.addEventListener('click', function(){
    console.log('Click');
    alert('alert')
})
//!---------------------------------------Form-----------------------------------------------------------
//Ul
const taskList = document.getElementById('task-list')//! Creating var and assigning it to ID 'task-list'
//Input
const taskInput = document.getElementById('task')//! Creating var and assigning it to ID 'task'
//Button
const submitBtn = document.getElementById('taskbutton')//! Creating var and assigning it to ID 'submit'
// submitBtn.addEventListener('click', function(event){
//     event.preventDefault()//! Prevents default behavior of forms. Forms have a defualt action of reloading the page after each submission
//     console.log(e);//! e is event
// })
const form = document.querySelector('form')//! creating new var and assigning it to <form>
form.addEventListener('submit', function(e){
    e.preventDefault()//! this prevents the default action of forms
    console.log(e);
    const formInput = document.getElementById('task') //! Created new var and assigned it to ID 'task'
    console.dir(formInput); //! This allows us to access the directory of the var formInput
    const inputLog = document.createElement('p')//! created new var and created new element of <p>
    inputLog.textContent = formInput.value //! set inputLog's textContent to eqqual the formInput's value
    console.log(inputLog.textContent);
    formInput.value = ''//! Resets input bar
})