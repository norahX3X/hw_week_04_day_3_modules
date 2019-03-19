 
 var person = require('./person')


 //() missing
const multiply = (num1, num2) => console.log(num1 * num2); 

//{}missing
const subtractFive = num => {
	const diff = 5 - num; 
    console.log(diff);
}

//last } missing 
const printName = name = function() {
    console.log(name)
}

person.sayHello("Anoud") //should return Hi, Anoud!
console.log(person.getOlder(12) ) //should return 62 