//Activity 1 : Object Creation and Access
//Task 1:

const book = {
    title: 'You can Do',
    author: 'ravi',
    year: '2024',
    
}
console.log(book)

//Task 2:

console.log(book.author)

//Activity 2: Object Methods

//Task 3 && //Task 7
book.details = function() {
    return `Book Name is ${this.title} by ${this.author}`
}
console.log(book.details())

// Task 4 :
book.updateYear = function (year) {
    this.year =year
}

book.updateYear(2001) 

console.log(book)  // year updated to 2001

//Activity : Nested Objects 

//Task 5 :
book.library = {
    moreBooks: ["Book 1", "Book 2", "Book 3"],
    location :'India'
    }

    //Task 6 :
console.log(book.library)
    

//Activity 5 : Object Iteration 

//Task 8 :
const test = {
    name: 'Ravi',
    age: '15',
    location:'Ap'
}
// For In : here you will get the keys of an object
for (let key in test) {
    console.log(key)  // here you will get name , age ,location 
}

// For OF : for of you can only when you have array or string  // like [1,2,3] or "some string"
for (let values of "string or array") {
    console.log(values)
}

//Task 9

//Usting Object.keys or Object.values you will get the results in an array
console.log(Object.keys(test)) // ['name','age','location']

console.log(Object.values(test)) //['Ravi','15','Ap']  