import {default as Person} from "./person7"

class Student extends Person {
    constructor(name){
        super(name)
        console.log("Student Class constructor")
    }
    hello(){
        console.log("Hi I am a student a specialized person") // override
    }
}
export default Student