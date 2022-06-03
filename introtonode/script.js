//! Require is a global object that lets us take us retrieve codes from other JS modules
//! We can also set it to a variable 
const module1 = require('./module1')

//! We would log it using dot notation to display each parameter seperately
console.log(module1.username);
console.log(module1.add(1,2));