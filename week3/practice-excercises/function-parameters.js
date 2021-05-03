//CLO1
let studentGrades = [90, 80 , 88, 98];
let curveGrades = function(grades, percentage){ 
    var newGrades = grades.map(grade => {
        return grade * percentage;
    })
    return newGrades;
};
var result = curveGrades(studentGrades);

console.log(result); //Value:

//CLO2
let studentGrades2 = [90, 80 , 88, 98];
let curveGrades2 = function(grades2, percentage2 = 1.10){ 
   var newGrades2 = grades2.map(grade2 => {
        return grade2 * percentage2;
    })
    return newGrades2;
}
var result2 = curveGrades2(studentGrades2)

console.log(result2); //Value:
/*
//CLO3
let studentGrades = [90, 80 , 88, 98];
let curveGrades = function(grades, percentage = 1.10){ 
   var newGrades = grades.map(grade => {
        return grade * percentage;
    })
    return newGrades;
}

var result = curveGrades(studentGrades, 1.33)

console.log(result);

//CLO4
let studentGrades = [ 90, 80 , 88, 98]
let curveGrades = function( ...grades, percentage = 1.10){ 
   var newGrades = grades.map( grade=> {
        return grade * percentage
    })
    return newGrades
}

var result = curveGrades(...studentGrades, 1.33)

console.log(result);

//CLO5
let studentGrades = [ 90, 80 , 88, 98]
let curveGrades = function( ...grades, percentage = 1.10){ 
   var newGrades = grades.map( grade=> {
        return grade * percentage
    })
    return newGrades
}

var result = curveGrades(...studentGrades)

console.log(result);

//CLO6
let studentGrades = [ 90, 80 , 88, 98]
let curveGrades = function( ...grades, percentage = 1.10){ 
   var newGrades = grades.map( grade=> {
        return grade * percentage
    })
    return newGrades
}

var result = curveGrades(1.24, ...studentGrades)

console.log(result);

//CLO7
let studentGrades = [ 90, 80 , 88, 98]
let curveGrades = function( ...grades, percentage = 1.10){ 
   var newGrades = grades.map( grade=> {
        return grade * percentage
    })
    return newGrades
}

var result = curveGrades(undefined, ...studentGrades)

console.log(result);

//CLO8
let studentGrades = [ 90, 80 , 88, 98]

let percentageCurve = 0.98
let curveGrades = function( ...grades, percentage = percentageCurve){ 
   var newGrades = grades.map( grade=> {
        return grade * percentage
    })
    return newGrades
}

var result = curveGrades(undefined, ...studentGrades)

console.log(result);

//CLO9
let studentGrades = [ 90, 80 , 88, 98]
const avg = function(array){
   let average = array.reduce((a, b) => a + b, 0) 
   return average/array.length/100
}
let curveGrades = function(  percentage = avg(studentGrades),...grades){
   var newGrades = grades.map( grade=> {
      return grade * percentage
    })
    return newGrades
}

var result = curveGrades(undefined, ...studentGrades)

console.log(result);

//CLO10
let studentGrades = [ 90, 80 , 88, 98]
const avg = function(array){
   let average = array.reduce((a, b) => a + b, 0) 
   return average/array.length/100
}
let curveGrades = function(  percentage = avg(studentGrades),...grades){
   var newGrades = grades.map( grade=> {
      return grade * percentage
    })
    return newGrades
}

var result = curveGrades(1.3, ...studentGrades)

consult.log(result);

//CLO11
let studentGrades = [ 90, 80 , 88, 98]
const avg = function(array){
   let average = array.reduce((a, b) => a + b, 0) 
   return average/array.length/100
}
let curveGrades = function(  percentage = avg(studentGrades),...grades){
   var newGrades = grades.map( grade=> {
      return grade * percentage
    })
    return newGrades
}

var result = curveGrades(1.3, 68,56, ...studentGrades)

console.log(result);

//CLO12
let count = new Function("grades", "...grades.length");
var result = count([90, 80 , 88, 98]);

console.log(result); //Value:
*/