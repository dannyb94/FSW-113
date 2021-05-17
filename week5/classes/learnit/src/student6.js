import { default as Person } from "./person6"

class Student extends Person( ){
   constructor(){
          super()
          console.log("Constructing Student ")
    }
     hello(){
          console.log( "Hi I am a student a specialized person")
    }
}
export default Student