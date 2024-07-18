//Activities : 1 Array Creation and Access
//Task 1 :
const myArray = new Array(1, 2, 3, 4, 5);  //one way to create an array 
const array2 = [6, 7, 8, 9, 10]  // two ways to create an array


console.log(myArray) //[1,2,3,4,5]
console.log(array2) //[6,7,8,9,10]

//Task 2 :
const firstElement = myArray[0] // array index start with 0
console.log(firstElement)

//Activity 2
const sampleArray = [1, 2, 3, 4, 5, 6, 7, 8]

//Task 3 : push use for push element at the end of the array
const push = sampleArray.push(20) 
console.log(push)  //9   this is show the length of the array 
console.log(sampleArray) // [1, 2, 3, 4, 5, 6, 7, 8,20]
//Task 4 : pop use for remove the last element in the array
const pop = sampleArray.pop()
console.log(pop) //20
console.log(sampleArray) // [1, 2, 3, 4, 5, 6, 7, 8]

//Task 5 : shift is used for removing the first element in the array
const shift = sampleArray.shift()
console.log(shift) //1
console.log(sampleArray) // [ 2, 3, 4, 5, 6, 7, 8]

//Task 6 : unshift  is used for adding the element at the start of the array

const unshift = sampleArray.unshift(-1)
console.log(unshift) //8
console.log(sampleArray) // [  -1, 2, 3, 4,  5, 6, 7, 8  ]


//Activity 3: Array Methods  

//Task :7
const mydata = [1, 2, 3, 4, 5, 6]
const mutlpules = mydata.map((item) => item * 2)
console.log(mutlpules)

//Task : 8

const filterdata = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const evenNumbers = filterdata.filter((item) => item % 2 === 0)
console.log(evenNumbers)

//Task :9
const total = mydata.reduce((acc, cur) => {
   return acc+=cur
}, 0)
console.log(total) //21

//Actively :4
//Task : 10 

for (let i = 0; i < filterdata.length; i++) { 
    console.log(filterdata[i])
}   

//Task :11


mydata.forEach((item) => {
    console.log(item)
})


//Actively : 5
//Task :12
const array = [1, 2, 3, [4, 5, 6]] 

console.log(array)

//Task :13
console.log(array[3][2])

