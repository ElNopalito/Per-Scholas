//! Please excuse the notes, these are for my reference.
 //1. Create a new variable called 'total' and assign it the div with the id of 'total'
 let total = document.getElementById('total')//! create var and assign it to ID 'total'
 console.log(total);
 console.log(total.textContent); //! console logs the contents of the var 'total' which to assinged to ID 'total'
 //update the value of the total variable textContent
 // use an alert to alert the user
 //! In short, this function takes the var total which is assigned to ID 'total' which is 0
 //! After, it reveals the content if the var which is 0
 //! We then use one of two methods below to add a number to the var which is 0
 function add(){
     //! This method is to add by 1. JS will default the '++' symbol to add by one
     //total.textContent ++
     //! This medthod allows us to add by any number we choose.
     total.textContent = Number(total.textContent) + 1
     }
    const addBtn = document.getElementById('add')
    console.log(addBtn);
    addBtn.addEventListener('click', add)
   //!-----------------------------------------------------------//
    function subtract(){
        total.textContent --
    }
    const subtractBtn = document.getElementById('subtract')
    console.log(subtractBtn);
    subtractBtn.addEventListener('click', subtract)
  //!-----------------------------------------------------------//
 function multiplyBy2(){
total.textContent = Number(total.textContent) * 2
 }
const multiplyby2Btn = document.getElementById('mult-2')
console.log(multiplyby2Btn);
multiplyby2Btn.addEventListener('click', multiplyBy2)
  //!-----------------------------------------------------------//
 function multiplyBy5(){
    total.textContent = Number(total.textContent) * 5
}
const multiplyBy5Btn = document.getElementById('mult-5')
console.log(multiplyBy5Btn);
multiplyBy5Btn.addEventListener('click', multiplyBy5)
  //!-----------------------------------------------------------//
function divideBy5(){
total.textContent = Number(total.textContent) / 5;
}
const divideBy5Btn = document.getElementById('div-5')
console.log(divideBy5Btn);
divideBy5Btn.addEventListener('click', divideBy5)
  //!-----------------------------------------------------------//
function divideBy2(){
total.textContent = Number(total.textContent) / 2
}
const divideBy2Btn = document.getElementById('div-2')
console.log(divideBy2Btn);
divideBy2Btn.addEventListener('click', divideBy2)
  //!-----------------------------------------------------------//
  function reset(){
      total.textContent = Number(total.textContent) * 0
  }
  const resetBtn = document.getElementById('reset')
  console.log(resetBtn);
  resetBtn.addEventListener('click', reset)