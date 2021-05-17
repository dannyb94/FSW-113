//CLO1
// import { Course, Session } from "./module1"
// console.log( "From Module 1", Course) //Value: FSW113
// console.log( "From Module 1", Session) //Value: 02/02/2020

//CLO2
// import {Course as CourseId, Session} from "./module2"
// console.log( "From Module 2", CourseId) //Value: FSW113
// console.log( "From Module 2", Session) //Value: 02/02/2020

//CLO3
// import {Course as CourseId , Session} from "./module3"
// console.log("From Module 3", CourseId) //Value: FSW113
// console.log("From Module 3", Session) //Value: 02/02/2020

//CLO4
// import {Course as CourseId , Session} from "./module4"
// console.log("Load index.js.... Start") //Value: Load index.js.... Start

// console.log("From Module 4", CourseId) //Value: FSW113
// console.log("From Module 4", Session) //Value: 02/02/2020

// console.log("Load index.js.... End") //Value: Load index.js.... End

//CLO5
// import Course  from "./module5"
// console.log( "From Module 5", Course) //Value: From Module 5 FSW113

//CLO6
// import {default as Course} from "./module6"
// console.log( "From Module 6", Course) //Value: From Module 6 FSW113

//CLO7
// import {default as Course} from "./module7"
// console.log( "From Module 7", Course) //Attempted import error: './module7' does not contain a default export (imported as 'Course').

//CLO8
// import {default as Course, liveSession as Session}  from "./module8"
// console.log( "From Module 8", Course) //Value: FSW113
// console.log( "From Module 8", Session) //Value: 02/02/2020

//CLO9
// import * as mod from "./module9"
// console.log( "From Module 9", mod.courseName) //Value: FSW113
// console.log( "From Module 9", mod.liveSession) //Value: 02/02/2020

//CLO10
// import {courseName as Course, liveSession as Session} from "./module10"
// courseName ="FSW220"
// console.log( "From Module 10", courseName) //Value: is not defined
// console.log( "From Module 10", liveSession) //Value: is not defined

//CLO11
// import *  as mod from "./module11"
// mod.courseName = "FSW220"
// mod.liveSession = "Spring2020"

// console.log( "From Module 11", mod.courseName) //Value: is not defined
// console.log( "From Module 12", mod.liveSession) //Value: is not defined

//CLO12
import *  as mod from "./module12"
mod.courseName = "FSW113"
mod.liveSession = "Spring2020"

console.log("From Module 12", mod.courseName)
console.log("From Module 12", mod.liveSession)
console.log("From Module 12", mod.combine()) //Value: TypeError: Attempted to assign to readonly property.