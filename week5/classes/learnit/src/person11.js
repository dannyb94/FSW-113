class Person{}()=>{
    constructor (first, last){
        let firstName = first
        let lastName = last    
    }
 
    fullname(){
        console.log(`The full name of the person = ${lastName}, ${firstName}`)
    }
 
}
export default Person