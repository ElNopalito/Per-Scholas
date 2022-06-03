//default limit
let limit = 10;
//
var policeData;

var mainContainer;
const btn = document.getElementById("boroughBtn");
const play = document.getElementById('play')


btn.addEventListener("click", (event) => {
  // console.log(button has been hovered over);
  console.log(event)
  event.preventDefault();
let boroughs = event.path[0].innerHTML
console.log(boroughs);
  // user input needs to be stored somewhere
  let userInput = +document.getElementById("userInput").value;
  if (userInput === 0 ){
      userInput=limit;
  }
  console.log(userInput);
  mainContainer = document.getElementById("data");
  while (mainContainer.hasChildNodes()) {
    mainContainer.removeChild(mainContainer.firstChild);
  }

  // fetching data
  fetch(
    `https://data.cityofnewyork.us/resource/cwy2-px8b.json?agency=NYPD&borough=${boroughs.toUpperCase()}&$limit=${userInput}`  
  )
    .then((response) => response.json())
    .then((data) => (policeData = data))
    .then(() => {
      for (i = 0; i < policeData.length; i++) {
        var divOne = document.createElement("div");
        var divTwo = document.createElement("div");
        var divThree = document.createElement("div");

        divOne.innerHTML = `resolution description: ${policeData[i].resolution_description}`;
        //Create new class called resDiv
        divOne.className = 'resDiv'
        divTwo.innerHTML =  `borough: ${policeData[i].borough}` ;
        //Create new class called resDiv
        divTwo.className = 'resDiv'
        divThree.innerHTML =  `descriptor: ${policeData[i].descriptor}`;
        //Create new class called resDiv
        divThree.className = 'resDiv'


       
        mainContainer.appendChild(divOne);
        mainContainer.appendChild(divTwo);
        mainContainer.appendChild(divThree);
      }
    })
    .catch((err) => console.log(err));
});

