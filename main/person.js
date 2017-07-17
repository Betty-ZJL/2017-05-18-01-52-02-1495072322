module.exports =class Person{

    constructor(name,age){
        this.name=name
        this.age=age
    }
    introduce(){
        return('My name is ${this.name}. I an ${this.age} years old.')
    }
    
}
