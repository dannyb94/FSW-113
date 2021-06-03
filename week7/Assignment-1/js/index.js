/* 
  index.js
*/
$(document).ready(function() {
  
  "use strict";
  var resultList = $("#resultList");
  resultList.text("... Result");

  var toggleButton = $("#toggleButton");
  toggleButton.on("click", function() {
    resultList.toggle(500);

    if (toggleButton.text() == "Hide") toggleButton.text("Show");
    else toggleButton.text("Hide");
  });

  var listItems = $("header nav li");
  listItems.css("font-weight", "bold");
  listItems.filter(":first").css("font-size", "18px");

  $("#starWarApiSearchForm").on("submit", function() {
    debugger
    var peopleId = $("#peopleId").val();

    if (peopleId) {

      resultList.text("Performing search...");

      var starWarApiSearch = "https://swapi.dev/api/people/" + peopleId;
      
      $.get(starWarApiSearch)
        .success(function(r) {
          displayResults(r);
        })
        .fail(function(err) {
          console.log("Failed to query Star war API");
        })
        .done(function() {
          //
        });
    }

    return false;
  });

  function displayResults(results) {
   
    resultList.text(JSON.stringify(results));


  }

});




/*
for (i = 1; i <= 5; i++){
  const charInfo = async() => {
    let char;
    //let movieList = [];
    //let vehicleList = [];
    //let starshipList = [];

    try {
      char = await axios.get('https://swapi.dev/api/people/' + [i])

      let movieList = char.data.films;
      for (let m = 0; m < movieList.length; m++){
        movieList = await axios.get(movieList[m])
        movies.push(movieList.data.title)
      }

      let vehicleList = char.data.vehicles
      for (let v = 0; v < vehicleList.length; v++){
        vehiclesList = await axios.get(vehicleList[v])
        vehicles.push(vehiclesList.data.name)
      }
            
      let starshipList = char.data.starships
      for (let s = 0; s < starshipList.length; s++){
        starList = await axios.get(starshipList[s])
        starships.push(starList.data.name)
      }

      displayDataToDom(char, movieList, vehicleList, starshipList)
    }
    catch (error){
      console.log(error)
    }
  }

  charInfo()

  function displayDataToDom(char, movieList, vehicleList, starshipList){
    var h1 = document.createElement('h1');
    h1.textContent = char.data.name;
    document.body.appendChild(h1);

    var h3 = document.createElement('h3');
    h3.textContent = 'Films'; //char.data.movieList;
    document.body.appendChild(h3); 
    for (let m = 0; m < movieList.length; m++){
      const films = document.createElement('li');
      films.textContent = movieList[m];
      document.body.appendChild(films);
    }

    var h32 = document.createElement('h3');
    h32.textContent = 'Vehicles';
    document.body.appendChild(h32);
    if(vehicleList.length === 0){
      const na = document.createElement('p');
      na.textContent = "No vehicles."
      document.body.appendChild(na)
    }
    else {for (let m = 0; m < vehicleList.length; m++){
      const veeks = document.createElement('li');
      veeks.textContent = vehicleList[m];
      document.body.appendChild(veeks);
      }
    }

    var h33 = document.createElement('h3');
    h33.textContent = 'Starships';
    document.body.appendChild(h33);
    if(starshipList.length === 0){
      const na2 = document.createElement('p');
      na2.textContent = "No starships."
      document.body.appendChild(na2)
    }
    else {for (let m = 0; m < starships.length; m++){
      const flight = document.createElement('li');
      flight.textContent = starshipList[m];
      document.body.appendChild(flight);
      }
    }

  }
}
*/






for (i = 1; i <= 5; i++){
  //const charEndPoint = `https://swapi.dev/api/people/`

  //let peopleData = []
  const getData = async() => { //function(id){
      let response;
      try {
          response = await axios.get('https://swapi.dev/api/people/')
          //const idEndPoint = `${charEndPoint}/${id}`
          const characterName = await response.data.name
          const movieList = await response.data.films
          const vehicleList = await response.data.vehicles
          const starshipList = await response.data.starships
      
          // const res = await fetch(idEndPoint)
          // const data = await response.json()
          // peopleData = await {...peopleData, [id]:data}
      }
      catch(error){
          console.log(error )
      }
  }
  getData()

  function displayData(characterName, movieList, vehicleList, starshipList){
      var h1 = document.createElement('h1')
      h1.textContent = characterName//.data.name
      document.body.append(h1)

      var h3 = document.createElement('h3');
      h3.textContent = 'Films';
      document.body.append(h3); 
      for (let f = 0; f < movieList.length; f++){
          const films = document.createElement('li');
          films.textContent = movieList[f];
          document.body.append(films);
      }

      var h32 = document.createElement('h3');
      h32.textContent = 'Vehicles';
      document.body.append(h32);
      if(vehicleList.length === 0){
          const na = document.createElement('p');
          na.textContent = "No vehicles."
          document.body.append(na)
      }
      else {for (let m = 0; m < vehicleList.length; m++){
              const veeks = document.createElement('li');
              veeks.textContent = vehicleList[m];
              document.body.append(veeks);
          }
      }

      var h33 = document.createElement('h3');
      h33.textContent = 'Starships';
      document.body.append(h33);
      if(starshipList.length === 0){
          const na2 = document.createElement('p');
          na2.textContent = "No starships."
          document.body.append(na2)
      }
      else {for (let m = 0; m < starships.length; m++){
              const flight = document.createElement('li');
              flight.textContent = starshipList[m];
              document.body.append(flight);
          }
      }

  }

}