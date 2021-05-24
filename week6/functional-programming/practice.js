/*//Ex1
const height = 10

const area = function(width){
    return height * width
}

//Ex2
const picture = "something.jpg"
const render = function(x, y){
    return draw(x, y)
}

//Ex3
var printData = function(data){
    return function(){
        var sentence = data.toLowerCase().split(" ");
        for (var i = 0; i < sentence.length; i++){
            sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
        }
        return sentence.join(" ")
    }
}

const print = printData
const output = print("hI theRE, HOW ArE yOu")
const result = output()
console.log(result)

//Ex4
const printData = function(data){
    return function(decorator){
        console.log(decorator.repeat(data.length))
        console.log(data.toUpperCase)
        console.log(decorator.repeat(data.length))
    }
}

const print = printData
const result = print("Hello there")
result("*")

//Ex5
const myArrays = [4, 5, 6, 7, 8]
const newArray = myArrays.map(item => item * 2);
console.log(myArrays);
console.log(newArray);

//Ex6
const myArrays = [4, 5, 6, 7, 8]
const newArray = Object.assign({}, myArrays, {count: myArrays.length})
console.log(myArrays)
console.log(newArray)
*/
//Ex7
const myArrays = [4, 5, 6, 7, 8]
const newArray = {...myArrays, count: myArrays.length}
console.log(myArrays)
console.log(newArray)