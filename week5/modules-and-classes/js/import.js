import {starWarsData} from './export'
 
for (i = 0; i < starWarsData.length; i++){
    var listItems = document.createElement("li")
    listItems.textContent = `${starWarsData[i].name} is ${starWarsData[i].height} cm tall and was in ${starWarsData[i].films}`
    document.body.appendChild(listItems)
}