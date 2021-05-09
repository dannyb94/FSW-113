/**///CLO1
let studentGrades = [90, 80 , 88, 98];
var result = {...studentGrades};
console.log(result); //Value: { '0': 90, '1': 80, '2': 88, '3': 98 }
console.log(result is instanceof array); //Value:

//CLO2
let myGrade = 99;
var result = {...myGrade};
console.log(result); //Value: {}

//CLO3
let studentGrades = [90, 80 , 88, 98];
var maxGrade = Math.max(...studentGrades);
console.log(maxGrade); //Value: 98

//CLO4
let studentGrades = [90, 80 , 88, 98];
var gradeArray = [...studentGrades];
console.log(gradeArray); //Value: [ 90, 80, 88, 98 ]

//CLO5
let studentGrades = [...[ , , ]];
console.log(studentGrades); //Value: [ undefined, undefined ]

//CLO6
let myHouseNumber = [..."8976"];
console.log(Math.max(myHouseNumber)); //Value: NaN

//CLO7
let myHouseNumber = [..."8976", "AB", "CDEF"];
console.log(Math.max(myHouseNumber)); //Value: NaN

//CLO8
var studentName = "James Moore";
var dob = "02/02/2002";
var studentInfo = {
    [studentName]:studentName ,
    [dob]:dob
}
console.log(studentInfo); //Value: { 'James Moore': 'James Moore', '02/02/2002': '02/02/2002' }

//CLO9
var studentName = "James Moore";
var dob = "02/02/2002";
var studentInfo = {
    studentName,
    dob
}
console.log(studentInfo); //Value: { studentName: 'James Moore', dob: '02/02/2002' }

//CL10
var studentName = "James Moore";
var dob = "02/02/2002";
var studentInfo = {
    studentName,
    dob,
    currentAge(){
        var today = new Date()
        var dobDate = new Date(this.dob)
        var timeDiff = today.getTime() - dobDate.getTime()
        var days = timeDiff/(1000*3600*24*365)
        return Math.round(days)
    }
}
var result = studentInfo.currentAge()
console.log(studentInfo); /*Value: {
    studentName: 'James Moore',
    dob: '02/02/2002',
    currentAge: [Function: currentAge]
  }*/

//CL11
var studentName = "James Moore"
var dob = "02/02/2002"
var studentInfo = {
    studentName,
    dob,
    age : function(){
        var today = new Date()
        var dobDate = new Date(this.dob)
        var timeDiff = today.getTime() - dobDate.getTime()
        var days = timeDiff/(1000*3600*24*365)
        return Math.round(days)
    }
}
var result = studentInfo.age()
console.log(studentInfo); //Value: { studentName: 'James Moore', dob: '02/02/2002', age: [Function: age] }

//CL12
var studentName = "James Moore";
var dob = "02/02/2002";
var studentInfo = {
    studentName,
    dob,
    ["ageOf Student"] : function(){
        var today = new Date()
        var dobDate = new Date(this.dob)
        var timeDiff = today.getTime() - dobDate.getTime()
        var days = timeDiff/(1000*3600*24*365)
        return Math.round(days)
    }
}
var result = studentInfo.(ageOf Student)
console.log(studentInfo); //Value:

//CL13
var columnName = "Name";
var name = {};
var student = {
    get [columnName]() {
    return name;
    },
    set [columnName](value) {
    name = value;
    },
};
student.Name = "Harry Potter";
console.log(student.Name); //Value: Harry Potter
/**/