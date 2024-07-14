//Activity:1 Arithmetic Operations

   //Task 1 : ADDITION
     console.log(5+5) //10
   
  //Task 2 : Subtraction
    console.log(10 - 5) //5
     
  //Task 3 : multiplication
     console.log(5 * 4) //20
     
  //Task 4 : division
      console.log(20 / 5)  //4
      
  //Task 5 : Remainder
      console.log(25 % 3)  //1
      

      
//Activity :2 Assignment Operators
   
      //Task 6 : +=
        let adding = 10
        adding += 20
        console.log(adding) //30
        
     
       //Task 7:-=
        let subtract = 40
        subtract-=20
        console.log(subtract) //20

//Activity :3 Comparison Operators     
        //Task 8: >,<            # if the given condition is right it will give output put as true other wise false
        
        console.log(10>3) //true
        console.log(3>3) //false
        console.log(5<20) //true
        console.log(20<4) //false
        
        //Task 9:>= , =<          # this is like previous operators >,< . but here if the values  both are equal . the output is true

        console.log(10>=3) //true
        console.log(3>=3) //true
        console.log(5<=20) //true
        console.log(20<=4) //false


        //Task 10:== , ===
            // == only check the values are equal are not but === is check the values are equal and both are same data types

            console.log(7 == "7") //true         # data types number ,string
            console.log(7 === "7") //false       # false because both data types are different
            console.log(7 === 7) //true 



// Activity :4 Logical Operators
 
        // && (logical And) if the all conditions are true then this will show true
        // || (logical Or) if one condition is true then this will show true
        // ! (logical Not) if the condition is true this will show false. if the condition is false this will show true
        

        // Task:11 &&
        console.log(4>3 && 7>6) //ture
        console.log(4>3 && 7>6 && 1>3) // false because the tired condition was false

        //Task:12 || 
        console.log(4>10 || 8<5) // false because all conditions were false
        console.log(4>10 || 8<5 || 7>5) // true because tired condition was true

        //Task:13 !
        console.log(!(4>10))  // true   #Note 4>10 this condition was false . when we use ! this operator false will convert to true
        console.log(!true)  //false
        console.log(!false) //true
        
//Activity :5 Ternary Operator (?)

//If the given condition is true we will some something . other wise we will show the something
    
const age = 19
age > 18 ? console.log("you can   vote") : console.log('you are not ready  for vote')  // output is you can vote
age > 23 ? console.log('you can drive') : console.log(`you can't drive`) // You can't drive







