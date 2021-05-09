/**/
//CLO1
let studentGrades = [90, 80 , 88, 98];
let curveGrades = function(grades, percentage){ 
    var newGrades = grades.map(grade => {
        return grade * percentage;
    })
    return newGrades;
};
var result = curveGrades(studentGrades);

console.log(result); //Value: [ NaN, NaN, NaN, NaN ]

//CLO2
let studentGrades2 = [90, 80 , 88, 98];
let curveGrades2 = function(grades2, percentage2 = 1.10){ 
   var newGrades2 = grades2.map(grade2 => {
        return grade2 * percentage2;
    })
    return newGrades2;
}
var result2 = curveGrades2(studentGrades2)

console.log(result2); //Value: [ 99.00000000000001, 88, 96.80000000000001, 107.80000000000001 ]

//CLO3
let studentGrades = [90, 80 , 88, 98];
let curveGrades = function(grades, percentage = 1.10){ 
   var newGrades = grades.map(grade => {
        return grade * percentage;
    })
    return newGrades;
}

var result = curveGrades(studentGrades, 1.33)

console.log(result); //Value: [ 119.7, 106.4, 117.04, 130.34 ]

//CLO4
let studentGrades = [ 90, 80 , 88, 98]
let curveGrades = function(percentage = 1.10, ...grades){ 
   var newGrades = grades.map( grade=> {
        return grade * percentage
    })
    return newGrades
}

var result = curveGrades(...studentGrades, 1.33)

console.log(result); //Value: [ 7200, 7920, 8820, 119.7 ]

//CLO5
let studentGrades = [ 90, 80 , 88, 98]
let curveGrades = function(percentage = 1.10, ...grades){ 
   var newGrades = grades.map( grade=> {
        return grade * percentage
    })
    return newGrades
}

var result = curveGrades(...studentGrades)

console.log(result); //Value: [ 7200, 7920, 8820 ]

//CLO6
let studentGrades = [ 90, 80 , 88, 98]
let curveGrades = function(percentage = 1.10, ...grades){ 
   var newGrades = grades.map( grade=> {
        return grade * percentage
    })
    return newGrades
}

var result = curveGrades(1.24, ...studentGrades)

console.log(result); //Value: [ 111.6, 99.2, 109.12, 121.52 ]

//CLO7
let studentGrades = [ 90, 80 , 88, 98]
let curveGrades = function(percentage = 1.10, ...grades){ 
   var newGrades = grades.map( grade=> {
        return grade * percentage
    })
    return newGrades
}

var result = curveGrades(undefined, ...studentGrades)

console.log(result); //Value: [ 99.00000000000001, 88, 96.80000000000001, 107.80000000000001 ]

//CLO8
let studentGrades = [ 90, 80 , 88, 98]

let percentageCurve = 0.98
let curveGrades = function(percentage = percentageCurve, ...grades){ 
   var newGrades = grades.map( grade=> {
        return grade * percentage
    })
    return newGrades
}

var result = curveGrades(undefined, ...studentGrades)

console.log(result); //Value: [ 88.2, 78.4, 86.24, 96.03999999999999 ]

//CLO9
let studentGrades = [ 90, 80 , 88, 98]
const avg = function(array){
   let average = array.reduce((a, b) => a + b, 0) 
   return average/array.length/100
}
let curveGrades = function(percentage = avg(studentGrades), ...grades){
   var newGrades = grades.map( grade=> {
      return grade * percentage
    })
    return newGrades
}

var result = curveGrades(undefined, ...studentGrades)

console.log(result); //Value: [ 80.1, 71.2, 78.32000000000001, 87.22 ]

//CLO10
let studentGrades = [ 90, 80 , 88, 98]
const avg = function(array){
   let average = array.reduce((a, b) => a + b, 0) 
   return average/array.length/100
}
let curveGrades = function(percentage = avg(studentGrades), ...grades){
   var newGrades = grades.map(grade => {
      return grade * percentage;
    })
    return newGrades
}

var result = curveGrades(1.3, ...studentGrades)

console.log(result); //Value: [ 117, 104, 114.4, 127.4 ]

//CLO11
let studentGrades = [ 90, 80 , 88, 98]
const avg = function(array){
   let average = array.reduce((a, b) => a + b, 0) 
   return average/array.length/100
}
let curveGrades = function(percentage = avg(studentGrades), ...grades){
   var newGrades = grades.map( grade=> {
      return grade * percentage
    })
    return newGrades
}

var result = curveGrades(1.3, 68,56, ...studentGrades)

console.log(result); //Value: [ 88.4, 72.8, 117, 104, 114.4, 127.4 ]

//CLO12
let count = new Function(grades, ...grades.length);
var result = count([90, 80 , 88, 98]);

console.log(result); //Value: grades is undefined
/**/