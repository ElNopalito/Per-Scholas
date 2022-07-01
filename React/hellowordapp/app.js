const message = 'React'
const message1 = 'Vanila JS'

//! Vanilla JS
const h1 = document.createElement('h1')
h1.textContent = message1
document.getElementById('root').appendChild(h1)

//! You could add app to the beginning of the JSX syntax instead of typing it all out
const app = <h1> {message} </h1>

//! React w/ JSX syntax
ReactDOM.render(app, document.getElementById('root'))