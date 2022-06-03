let color = 'yellow'


//! switch statemnts allow for multple if-else statements to be made 
/*switch(color){
    //! This case statement indicates that if the color is red
    //! then you would print 'This color is red'
    case 'red': 
    console.log('This color is red');
   //! the default value indicates that none of the cases match the logic criteria
   //! The default case will run every statement until the phrase 'break' is written
    break;
    //! The default statement will run without the break because the default statement is true without opposing logic.
    case 'blue':
        console.log('This color is blue');
        break;
    case 'yellow':
        console.log('This color is yellow')
        break;
    default: 
    console.log('Color is something else');
}
*/

//! Date object (Sunday = 0 and Friday = 6)
//! the formula below will generate a number from 0 - 6 and that will print out the assigned number using swith statement.
//! You can always replace the formaula with a number from 0-6 to assign day manually
switch (new Date().getDay()){
    case 0:
        console.log('Sunday');
        break;
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    default:
        console.log('Not found');
        
}