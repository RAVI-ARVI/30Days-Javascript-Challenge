// Activity 1  : Template Literals 
//Task 1 :
const personName = "priya"
const myage ='15'
console.log(personName, myage)


//Task 2 :

console.log(`This is person name ${personName} and ${myage}`)

//Activity 2 : Destructuring 

//Task 3:
const myArray = [1, 2, 3, 4, 5]
const [fist, second] = myArray
console.log(fist, second)

//Task 4 :

const myobj = {
    myname: "ravi",
    age: '23',
    
}
const { myname } = myobj
console.log(myname)


//Activity 3 : Spread and Rest Operation
//Task 5 :
const newarr = [...myArray, 6, 7,]
console.log(newarr)

//Task 6 :

const sum = (...numbers) => {
    
    console.log(numbers) //here you will get the data in array of numbers
    //way 1:
  const total=  numbers.reduce((acc, cur) => {
        return acc+=cur
  }, 0)
    console.log(total) // 15

    //way 2:
    let mytotal = 0
    numbers.forEach((item) => {
        mytotal+=item
    })
    console.log(mytotal) //15
}
sum(1, 2, 3, 4, 5)



//Activity 4:

//Task :7
function product(a, b = 1) {
    console.log(a*b)
    return a*b
}
product(7)


// Activity 5: Enhanced Object Literals

//Task 8 :
const name = 'John Doe';
const age = 30;
const occupation = 'Software Developer';

const person = {
  name,  // Property shorthand
  age,   // Property shorthand
  occupation,  // Property shorthand
  greet() {  // Method shorthand
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  },
  updateAge(newAge) {  // Method shorthand
    this.age = newAge;
  }
};

// Logging the object to the console
console.log(person);

// Example usage of methods
console.log(person.greet());  // Output: Hello, my name is John Doe and I am 30 years old.
person.updateAge(31);
console.log(person.greet());  // Output: Hello, my name is John Doe and I am 31 years old.


//Task :9
const propName1 = 'name';
const propName2 = 'age';
const propName3 = 'occupation';

const personobj = {
  [propName1]: 'John Doe',
  [propName2]: 30,
  [propName3]: 'Software Developer'
};

// Logging the object to the console
console.log(personobj);
