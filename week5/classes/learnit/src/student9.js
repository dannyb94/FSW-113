import {default as Person} from "./person9"

class Student extends Person {
    constructor(name){
        super(name)
        console.log("Student Class constructor")
    }
    hello(){
        console.log("Hi I am a student a specialized person") // override
        super.hello()
    }
}
export default Student