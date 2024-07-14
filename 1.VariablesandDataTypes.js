//Activity-1: Variable Declaration
var ab = 12;
console.log(ab)

let name = "ravi"
console.log(name)


//Activity-2: Constant Declaration
const isThisJs = true 
console.log(isThisJs)


//Activity-3: Data Types 

const a = 7
const b = "ravi"
const c = true
const d= {
    name:"this is object"
}
const e = ["this is array", 1, 2, true, false, "anything"]
const f = null
const g=undefined

console.log(typeof a) //number
console.log(typeof b) //string
console.log(typeof c) //boolean
console.log(typeof d) //object            
console.log(typeof e) //object                #Note : this is a array but this is showing as object
console.log(typeof f) //object                 #Note : this is a null value but this is showing as object
console.log(typeof g) //undefined

//Activity 4: Reassigning Variables 

let myname = "ravi"

console.log(myname)//ravi

myname = "ravi sankar" // here i'm updated the let variable value 
console.log(myname) // ravi sankar


//Activity 5: Understanding Const
const mynumber = 13
//  mynumber=44 // TypeError:Assigment to constant variable.  #you can't update the const value .


//Summery Of This Article;

/* 

I.Var
 using var you can :
        1. declare a variable with out initial value
        2.you can update the value 
        3. var is global scope . it means you can access before variable initialization . but it's show as undefined. to know more about this know about variable scope

        #with examples
        3. console.log(a) // undefined
       1. var a;
       2 var a=12

II.let
   using let you can:
         1. declare a variable with out initial value
         2. you can update the variable
         3. let is block scope .  you can access the out of the scope

         #with examples
         
         3.console.log(a) // throw error
         1. let a;
         2.a=43

III.const 
    using const you can:
        1. you can declare without initial value
        2. you can't update the value one it's defined
        3. const also block scope . you can access the out of the scope

        #with examples 
        1. const a; // you can't do this.
        2. const a=12
             a=23 // you can't update
        






Typeof
#Note : array and null are object type . be aware of while checking type of




*/

//To Know more about variables You can watch this resource . 

const blog = `https://roadsidecoder.hashnode.dev/javascript-interview-questions-on-var-let-and-const`
const video =`https://youtu.be/oUWRxJ19gfE?si=F59NJGvBZ97m8HkL`
