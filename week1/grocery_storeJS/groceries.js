/*
1. Add state, dateOfBirth and payRate attributes to the student data using JavaScript
2. And use a forEach loop javascript construct to print to console the value of each property before and after adding the additional attributes.
3. Change the declaration from var to const and repeat Requirement 2 and 3
4. Describe your expectation and the actual output.
*/

var students = [ 
    {name: "John", city: "California"},

    {name: "Peter", city: "London"},

    {name: "Mathew", city: "Manchester"},

    {name: "Jane", city: "Phoenix"}
]
console.log(students);

students.forEach(student => {
    if(student.name == "John"){
        student.state = "Oregon";
        student.dateOfBirth = "10/28/1994";
        student.payRate = "$24.50";
        console.log(`The student information is as follows: ${student.name} ${student.city} ${student.state} ${student.dateOfBirth} ${student.payRate}`);
    }
    if(student.name == "Peter"){
        student.state = "Iowa";
        student.dateOfBirth = "3/12/1970";
        student.payRate = "$17.80";
        console.log(`The student information is as follows: ${student.name} ${student.city} ${student.state} ${student.dateOfBirth} ${student.payRate}`);
    }
    if(student.name == "Mathew"){
        student.state = "Maryland";
        student.dateOfBirth = "6/17/1964";
        student.payRate = "$20";
        console.log(`The student information is as follows: ${student.name} ${student.city} ${student.state} ${student.dateOfBirth} ${student.payRate}`);
    }
    if(student.name == "Jane"){
        student.state = "New York";
        student.dateOfBirth = "9/12/1989";
        student.payRate = "$27";
        console.log(`The student information is as follows: ${student.name} ${student.city} ${student.state} ${student.dateOfBirth} ${student.payRate}`);
    }
});


const gradStudents = [ 
    {name: "John", city: "California"},

    {name: "Peter", city: "London"},

    {name: "Mathew", city: "Manchester"},

    {name: "Jane", city: "Phoenix"}
]
console.log(gradStudents);

gradStudents.forEach(student => {
    if(student.name == "John"){
        student.state = "Oregon";
        student.dateOfBirth = "10/28/1994";
        student.payRate = "$24.50";
        console.log(`The student information is as follows: ${student.name} ${student.city} ${student.state} ${student.dateOfBirth} ${student.payRate}`);
    }
    if(student.name == "Peter"){
        student.state = "Iowa";
        student.dateOfBirth = "3/12/1970";
        student.payRate = "$17.80";
        console.log(`The student information is as follows: ${student.name} ${student.city} ${student.state} ${student.dateOfBirth} ${student.payRate}`);
    }
    if(student.name == "Mathew"){
        student.state = "Maryland";
        student.dateOfBirth = "6/17/1964";
        student.payRate = "$20";
        console.log(`The student information is as follows: ${student.name} ${student.city} ${student.state} ${student.dateOfBirth} ${student.payRate}`);
    }
    if(student.name == "Jane"){
        student.state = "New York";
        student.dateOfBirth = "9/12/1989";
        student.payRate = "$27";
        console.log(`The student information is as follows: ${student.name} ${student.city} ${student.state} ${student.dateOfBirth} ${student.payRate}`);
    }
});

/* Requirement 4: My expectation was that the 'const' portion would not run properly because I believed it to be immutable. However, upon further research, the const identifier can't be changed/reassigned therefore it's not truly immutable. In this case it's the objects inside of the hard brackets that are being targeted. */

/*
5. Multiplication Table using JavaScript
!! You are not allowed to declare any additional global variables except the following
??? You need to create a solution using ES6 JavaScript syntax a complete set of multiplication table from 1, 12
*/
const multipliers = [1,2,3,4,5,6,7,8,9,10] 
const multiplican = [1,2,3,4]
const tableStart = 1
const tableEnd = 12
const table = []

for(var i = 0; i <= multipliers.length; i++){}





/*
var newStudents = students.map(student => {
    var newStudents = {...student};
    newStudents.state = "OR";
    newStudents.dateOfBirth = "4/28/1987";
    newStudents.payRate = "$18.23"
    return newStudents;
})
console.log(newStudents);
*/