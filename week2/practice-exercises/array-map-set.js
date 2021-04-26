//1
let studentArray = Array(10);
console.log(studentArray.length);
console.log(studentArray);

//2
let studentArray2 = Array.of(10);
console.log(studentArray2.length);
console.log(studentArray2);

//3
let grades = [90, 98, 78, 99];
let studentGrades = Array.from(grades, g => g * 110);
console.log(studentGrades.length);
console.log(studentGrades);

//4
let grades2 = [90, 98, 78, 99];
let studentGrades2 = Array.from(grades2, function(g){
    return g * this.percentageIncrement
}, {percentageIncrement: 1.10});
console.log(studentGrades2);

//5
let grades3 = [90, 98, 78, 99];
let studentGrades3 = Array.from(grades3, g => {
    return g * this.percentageIncrement
}, {percentageIncrement: 1.10});
console.log(studentGrades3);

//6
let grades4 = [90, 98, 78, 99];
let studentGrades4 = grades4.find(v => v == 90);
console.log(studentGrades4);

//7
let grades5 = [90, 98, 78, 99];
let studentGrades5 = grades5.find(v => v >= 90);
console.log(studentGrades5);

//8
let grades6 = [90, 98, 78, 99]
let studentGrades6 = grades6.map(v => v * 0.90);
console.log(studentGrades6);

//9
let grades7 = [90, 98, 78, 99];
//let studentGrades7 = (...grades7);
//console.log(studentGrades7);

//10
let student = {name: 'John Masson'};
let adjunct = {name: 'Dave Larson'};
let people = new Map();
people.set(student, "Student");
people.set(adjunct, "Adjunct");
console.log(people);

//11
let student2 = {name: 'John Masson'};
let adjunct2 = {name: 'Dave Larson'};
let people2 = new Map();
people2.set(student2, "Student");
people2.set(adjunct2, "Adjunct");
people2.delete(student2);
console.log(people2);

//12
let student3 = {name: 'John Masson'};
let adjunct3 = {name: 'Dave Larson'};
let people3 = new Map();
people3.set(student3, "Student");
people3.set(adjunct3, "Adjunct");
people3.clear();
console.log(people3);

//13
let student4 = {name: 'John Masson'};
let adjunct4 = {name: 'Dave Larson'};
let people4 = new Map();
people4.set(student4, "Student");
people4.set(adjunct4, "Adjunct");
let result = people4.has(student4);
console.log(result);

//14
let student5 = {name: 'John Masson'};
let adjunct5 = {name: 'Dave Larson'};
let people5 = new Map();
people5.set(student5, "Student");
people5.set(adjunct5, "Adjunct");
let result2 = people5.keys(student5);
console.log(result2);

//15
let student6 = {name: 'John Masson'};
let adjunct6 = {name: 'Dave Larson'};
let people6 = new Map();
people6.set(student6, "Student");
people6.set(adjunct6, "Adjunct");
let result3 = people6.values(student6);
console.log(result3);

//16
let student7 = {name: 'John Masson'};
let adjunct7 = {name: 'Dave Larson'};
let people7 = new WeakMap();
people7.set(student7, "Student");
people7.set(adjunct7, "Adjunct");
ladjunct = null;
console.log(people7.size);

//17
let student8 = {name: 'John Masson'};
let adjunct8 = {name: 'Dave Larson'};
let people8 = new Set();
people8.add(student8);
people8.add(adjunct8);
people8.add(adjunct8);
console.log(people8.size);

//18
let students = [
    {name: 'John Masson'},
    {name: 'Don Vasco'},
    {name: 'Mary Landley'}
];
let people9 = new Set(students);
console.log(people9.has({name: 'Dave Vasco'}));