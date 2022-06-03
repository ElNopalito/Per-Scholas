
console.log('testing')

const todoList = document.querySelector('#to-do')

const taskInput = document.getElementById('todo')


const submitButton = document.getElementById('submit-btn');

submitButton.addEventListener('click', function(event) {

const cookie = +document.getElementById('cookie').value
const sandwhich = +document.getElementById('sandwhich').value
const iceCream = +document.getElementById('ice-cream').value
const potato = +document.getElementById('potato').value

console.log (cookie, iceCream, sandwhich, potato);
    event.preventDefault()
    console.log(event);
    let total = (cookie) +(sandwhich) + (iceCream) + (potato);
    console.log(total);
})





let submitBtn = document.getElementById("submit-btn");
if (submitBtn) {
  submitBtn.addEventListener("click", function (event) {
    const username = document.getElementById("username").value;
    const message = document.getElementById("message").value;
    event.preventDefault();
    console.log(username, message);
  });
}