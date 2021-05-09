//CLO1
var students = [
    { name: "James", dob: "01/01/2000" },
    { name: "Mandy", dob: "01/01/2001" },
    { name: "Sandy", dob: "01/01/2002" },
    { name: "Harry", dob: "01/01/2003" }
]
for(var student of students){
    console.log(student);
} /*Value: { name: 'James', dob: '01/01/2000' }
    { name: 'Mandy', dob: '01/01/2001' }
    { name: 'Sandy', dob: '01/01/2002' }
    { name: 'Harry', dob: '01/01/2003' }*/

for (var student of students) {
    console.log(`Name = ${student.name}, Date Of Birth = ${student.dob}`);
} /*Value: Name = James, Date Of Birth = 01/01/2000
    Name = Mandy, Date Of Birth = 01/01/2001
    Name = Sandy, Date Of Birth = 01/01/2002
    Name = Harry, Date Of Birth = 01/01/2003*/

for (var student of students) {
    const {name, dob: dateOfBirth} = student
    console.log(`Name = ${name}, Date Of Birth = ${dateOfBirth}`);
} /*Value: { name: 'James', dob: '01/01/2000' }
    { name: 'Mandy', dob: '01/01/2001' }
    { name: 'Sandy', dob: '01/01/2002' }
    { name: 'Harry', dob: '01/01/2003' }*/

//CLO2
var students = [
    { name: "James", dob: "01/01/2000" },
    { name: "Mandy", dob: "01/01/2001" },
    { name: "Sandy", dob: "01/01/2002" },
    { name: "Harry", dob: "01/01/2003" }
];
var studentDetails = students.map((student) => {
    let newInfo = { ...student, name: student.name.toUpperCase(), college: "BU" };
    return newInfo;
});

for (var student of studentDetails) {
    const { name, dob: dateOfBirth, college } = student;
    console.log(
        `Name = ${name}, Date Of Birth = ${dateOfBirth}, University= ${college}`
    );
} /*Value: Name = JAMES, Date Of Birth = 01/01/2000, University= BU
    Name = MANDY, Date Of Birth = 01/01/2001, University= BU
    Name = SANDY, Date Of Birth = 01/01/2002, University= BU
    Name = HARRY, Date Of Birth = 01/01/2003, University= BU*/

//CLO3
var students = [
    { name: "James", dob: "01/01/2000" },
    { name: "Mandy", dob: "01/01/2001" },
    { name: "Sandy", dob: "01/01/2002" },
    { name: "Harry", dob: "01/01/2003" },
];
var studentDetails = students.map((student) => {
  let newInfo = { ...student, name: student.name.toUpperCase(), college: "BU"};
  return newInfo;
});
for (var student of studentDetails) {
    const { name, dob: dateOfBirth, college } = student;
    console.log(`Name = ${name}, Date Of Birth = ${dateOfBirth}, University= ${college}`);
} /* Value: Name = JAMES, Date Of Birth = 01/01/2000, University= BU
    Name = MANDY, Date Of Birth = 01/01/2001, University= BU
    Name = SANDY, Date Of Birth = 01/01/2002, University= BU
    Name = HARRY, Date Of Birth = 01/01/2003, University= BU*/

//CLO4
var students = [
    { name: "James", dob: "01/01/2000" },
    { name: "Mandy", dob: "01/01/2001" },
    { name: "Sandy", dob: "01/01/2002" },
    { name: "Harry", dob: "01/01/2003" },
];
var studentToSearch = { name: "Mandy", dob: "01/01/2001" };
var result = students.filter((student) => student.name == studentToSearch.name);
console.log(result); //Value: [ { name: 'Mandy', dob: '01/01/2001' } ]

//CLO5
var students = [
    { name: "James", dob: "01/01/2000" },
    { name: "Mandy", dob: "01/01/2001" },
    { name: "Sandy", dob: "01/01/2002" },
    { name: "Harry", dob: "01/01/2003" },
    { name: "Mandy", dob: "01/01/2020" }
];
var studentToSearch = { name: "Mandy", dob: "01/01/2001" };
var result = students.filter((student) => student.name == studentToSearch.name);
console.log(result); /* Value: [
    { name: 'Mandy', dob: '01/01/2001' },
    { name: 'Mandy', dob: '01/01/2020' }
  ]*/