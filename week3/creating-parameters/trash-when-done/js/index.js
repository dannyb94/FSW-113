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

const starWars = require('/Users/iluvmacncheese/Development/Bryan_University/FSW-113/week3/creating-parameters/json/data.json');
console.log(starWars);

/*var ulElem = document.createElement("ul");
ulElem.id = 'option5';
document.body.section.code.appendChild(ulElem);*/ //want to append to id:"resultList" output

var dataList = document.getElementById('option5');
for (var i =0; i < apiList.length; i++){
  dataList.innerHTML += '<li>' + `${apiList[i].name}, ${apiList[i].height}, ${apiList[i].mass}, ${apiList[i].birth_year}` + '</li>'
};
console.log(dataList);