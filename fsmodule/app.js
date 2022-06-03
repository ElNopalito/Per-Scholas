//! File Sytem Module
//! Use Require function to import FS module
const fs = require('fs')
//! Accessing parameters of FS module
// console.log(fs);

let message = 'Hello WORLD'
//! This dot notation allows us to ust FS module to create a file. 
//! We are creating a text file named Notes using formula: (filename, data, function)
// fs.writeFile(/*file*/'./notes.txt',/*data*/ 'Hello World', /*callback function*/function(){
//     console.log('Done creating file');
// })

//! We can add a var in data section. We created a var and input it in the dot notation.
fs.writeFile(/*file*/'./notes.txt',/*data*/ message, /*callback function*/function(){
    console.log('Done creating file');
})