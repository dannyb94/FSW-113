import {default as Person} from "./person10"

class Student extends Person {
    constructor(first, last){
        super(first, last)
        this.first = first
        this.last = last
    }
    allCaps(){
        console.log( `The full name of the person = ${this.last.toUpperCase()}, ${this.first.toUpperCase()}`)
    }
}
export default Student