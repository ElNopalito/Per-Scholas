/*console.log(`run script`)

const p = document.querySelector('p') //! This accesses elements in HTML
//const p = document.querySelector(`#bio`)
//const p = document.getElementById //! You can access elements of elements in HTML by using getElement...
//const p = document.querySelector('#bio') //! You can also just # or . to get ID or classes
// bio.textContent = 'This is my bio' //! .textContent allows you to manipulate text
// bio.style.backgroundColor = 'purple'//! Manipulating class bio nd changing color

const lis = document.querySelectorAll('li')//! Grabs all li
//lis.forEach(li => console.log(li))//! Console logging each li and displaying it
lis.forEach(li=> {
    li.style.backgroundColor = 'blue'
    li.style.fontSize = '38px'
    li.style.color = '#fff'
// lis[3].textContent = 'FOUR'.
}) //! This is manipulating all li in .forEach loop//! Maniupulating index 3 with 'FOUR'. console.log below
//const li = document.querySelectorAll //! .querySelectorAll selects all elements on HTML page
//const li = document.querySelectorA('li:last-child')//! This pulls last index and in this case :1 THIS IS NOT 0 INDEX LIKE ARRAY
const li = document.querySelector('li:nth-child(1)')//! Choosing li to adjust
li.style.backgroundColor = 'green' //! changing color
// bio.textContent = 'This is my bio' //! .textContent allows you to manipulate text
// bio.style.backgroundColor = 'purple'//! Manipulating class bio nd changing color


console.log(lis)
// console.log(h1);//! console to print it in console.
// console.dir(document);//! Directory of HTML 
// console.log(p)
// console.log(li) //! You can access all lis using console.log and it will appear in an array
// console.log(lis[3]) //! You can access specfic variables in array using index value
*/

const firstPtaginComments = comments.firstElementChild;//! another way to find specific element; just create new variable and set it to whatever you want to summon

const body = document.querySelector('body');
const firstLi = document.querySelector('#one');
const ul =document.querySelector('ul');
const div = document.querySelector('#comments');
//console.log(body.firstElementChild)
//console.log(body.lastElementChild) //! this will bring up script tag in console because we deferred the <script> tag to be at the end of body
//console.log(ul.children);//! All array elements
//console.log(ul.firstElementChild);//! First element in array
//console.log(ul.lastElementChild);//! Last element in array
//console.log(ul.childElementCount);
//console.log(div.children)
console.log(firstPtaginComments)
//console.log(.parentelement) //! Like finding children element, you can find parent elements too.
//console.log(.nextElementSibling) //! Find the next element in order 

comments.classList = 'test'//! applying CSS 
comments.classList.add('test', 'card')

