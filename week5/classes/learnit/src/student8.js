import { default as Person } from "./person8"

class Student extends Person {
    constructor(name){
        super(name)
        console.log("Student Class constructor")
    }
}
export default Student