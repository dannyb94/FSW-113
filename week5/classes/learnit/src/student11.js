import {default as Person} from "./person11"

class Student extends Person {
    constructor (first, last){
        super(first, last)
        let first = first
        let last = last
    }
    allCaps(){
        console.log(`The full name of the person = ${last.toUpperCase( )}, ${first.toUpperCase()}`)
    }
}

export default Student