const person = {
    
    firstName:'Donavan',
    lastName:'Smith',
    age: 28,
    email: 'steve@gmail.com',
    hobbies: ["music", "sports", "painting"],
    address: {
        country: 'Colombia',
        city: 'Bogota'
    },
    bark: function(sound){
        console.log(sound);    },//! You can add functions here such as sound. It will still follwo the key:value structure.
}



person.bark('Woof!')
let input = 'address' //!This allows up to print specific variables in object
console.log(person) //! This prints object with all the variables
console.log(typeof person); //! This defines the typeof function this is which is object
console.log(person.firstName) //!This allows us to print firstname
console.log(person['address']) //! In addtion to "let input = ''", we would console.log "input"
delete person.age //!This allows deletion of property in object
person.address.zipcode = '10033'//! You can add to properties in nest ino object (address)
console.log(person.hobbies[2])//! You can access properties in object similar to how you access files on PC. person > hobbies > [2] <- this is an array so you will use index number 2 for sports
