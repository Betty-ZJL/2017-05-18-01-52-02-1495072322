let Person = require('./person')
// Write your code here
function Student(name,age,klass){
    person.call(this,name,age)
}
Student.prototype.introduce=function(){
  console.log('My name is '+this.name+'. I am '+this.age+' years old. I am a Student. I am at Class '+this.klass+'.')
}
module.exports = Student
