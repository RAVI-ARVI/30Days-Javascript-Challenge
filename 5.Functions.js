//Activity : 1 Function Declaration
//Tasl :1 

function mynumber(num) {
     console.log(num%2 ==0?"Even":'Odd')
}
mynumber(13)
 

//Task :2
function square(num) {
    return num*num
}
const five = square(5)
console.log(five)



//Activity 2:Function Expression
//Task :3
const findMax = function (num1, num2) {
    console.log(num1>num2?num1:num2)
}

findMax(14, 10)

//Task :4 

const concatenate = function (str1, str2) {
    console.log(str1 + " "+str2)
}

concatenate("this is", "my name")


//Activity 3 : Arrow Functions 

//Task 5 
const sum = (a,b) => {
    return a+b
}

console.log(sum(10, 23))


//Task 6

const fiveLetters = (str) => {
    console.log(str.length>5?"Given String is more than 5 characters long":' given string is less than 5 characters long')
}

fiveLetters("you can")

//Activity 4:Function Parameters and Default Values
//Task 7: 
const multiplication = (a, b = 1) => {
    return (a * b)
}
console.log(multiplication(3,4)) //12
console.log(multiplication(4)) //4

//Task 8:

const greeting = (name, age=17) => {
    return `hello ${name} your age is ${age}`;
}

console.log(greeting('resugurram', 23))
console.log(greeting('zombie'))

// Activity :5 Higher Order Functions
//Task 9 : 
function RenderMyFn(fn, num) {
    for (let i = 0; i < num; i++){
        fn(i)
    }
}
function SayHello(num) {
    console.log(`Hello good morning`,num)
}

RenderMyFn(SayHello, 5)

//Task 10 :
const applyFunctions = function(fn1, fn2, value) {
    const firstResult = fn1(value);
    const finalResult = fn2(firstResult);
    return finalResult;
  };
  
  // Example usage
  const addTen = function(x) {
    return x + 10;
  };
  
  const multiplyByTwo = function(x) {
    return x * 2;
  };
  
  const result = applyFunctions(addTen, multiplyByTwo, 5);
  console.log(result); // Output: 30 (first adds 10 to 5 to get 15, then multiplies 15 by 2 to get 30)
  

