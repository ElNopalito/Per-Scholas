const username = 'bill'

//! Module is a global object in JS. When we're logging the Module, we are accessing the parameters of it.
// console.log(module);

const add = (a,b) => a+b


//! We have 2 module exports in this case which is not possible. In this scenario, the last module export would be the one that is exported.
// module.exports = add
// module.exports = username

//! To fix that, we use dot notation. As mentioned earlier, if we console.log the module, it would give us access to the paramenters within.
//! To call on the parameters, we would use dot notation and in turn, it would allow us to call on multiple options for the export parameter and set it within an array when exported.
module.exports.add = add
module.exports.username = username