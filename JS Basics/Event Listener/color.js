const COLORS_ARRAY = [
    "red",
    "yellow",
    "magenta",
    "cyan",
    "blue",
    "black",
    "gray",
    "teal",
    "green",
    "purple",
    "violet",
  ];
  // CHALLENGE
  // 1. Create A Function (generate)
  function generate(){
      //!This formula allows for us to access the COLOR_ARRAY array and within the array, it will generate a random number mulplied by the length of the colors_array
    const randomColor = COLORS_ARRAY[Math.floor(Math.random()*COLORS_ARRAY.length)] 
    console.log(randomColor);
    const li = document.createElement('li')
    li.textContent = randomColor //!create a new <li> element and set it to the randomColor which sets it to the array it's attached to
    console.log(li);
    const ul = document.getElementById('color-list')
    ul.appendChild(li) //! appending the <li> into the <ul>. Appended childs go in parenthesis. This appends the randomColor array in the ul 'color-list'
  }
  
  
  const button = document.getElementById('generate-color') //! This creates a new variable and sticks it to the <button> tag
  button.addEventListener('click', generate)//! this allows for each click to run the function 'generate'
    // Function should get a random color from the COLORS_ARRAY
    // Create li
    // add text content to the il of the color's name from the array
    // append the li to the color-list
  // 2. Create Function (reset)
  
  //!See if you can guess what this does. If not, refer to ZOOM meeting on 5/2 at 44:47
  function reset(){
    const ul = document.getElementById('color-list') //!<ul> from HTML and sets it to variable 'ul'
    const il = ul.firstChild //!create new variable and set to the first child of the 'ul' variable which is the first of the <ul>
    ul.removeChild(il)//! Removes first li which is randomColor array. 
    console.log(ul);
  }

  const resetBtn = document.getElementById('reset')
  resetBtn.addEventListener('click', reset)
  
  
  // Should remove all li children from the ul.
  // Should set background color to white.