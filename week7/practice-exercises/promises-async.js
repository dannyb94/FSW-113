const fetch = require('node-fetch')

const URL = `https://swapi.dev/api`
const peopleEndPoint = `${URL}/people`

let peopleData = []
const getData = async function(id){
    const idEndPoint = `${peopleEndPoint}/${id}`
    const response = await fetch(idEndPoint)
    const data = await response.json()
    peopleData = await {...peopleData, [id]:data}
}
/*const getData = function(id){
    const idEndPoint = `${peopleEndPoint}/${id}`
    fetch(idEndPoint)
    .then(res => res.json())
    .then(data => {
        //console.log(`${id} ======>>>>>>>>`)
        peopleData = {...peopleData, data}
    }
)}*/

var ids = [2, 3, 7, 25, 12, 4, 200]
var result = []
ids.forEach(id => {
    //console.log(id)
    result.push(getData(id))
})

var output = Promise.all(result).then(response => {
    console.log(peopleData);
})

.catch(error => {
    console.log(error)
})