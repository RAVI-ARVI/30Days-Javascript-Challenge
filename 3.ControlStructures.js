//Activity :1 If-Else Statements
    //Task:1
    const number = 3;
    if (number >= 0) {
        console.log(`${number} is a positive number`)   // 3 is a positive number
    } else {
        console.log(`you given negative number`)
    }


    //Task:2
    const age=22
    if (age >= 18) {
            console.log(`you are eligible for vote`)
    } else {
        console.log(`you are not eligible for vote`)
    }
        
    
//Activity : 2 Nested If-Else Statements

    //Task:3
    const mynumber = 3;
    if (mynumber <= 0) {
            console.log(`${mynumber} is a negative number or 0`)
    } else if (mynumber > 0 && mynumber < 20) {
        console.log(` given number is between 0 to 20`) // given number is 0 to 20
    } else if (mynumber > 20 && mynumber < 40) {
        console.log(` given number is between 20 to 40`)
    } else {
        console.log(`given number is more than 40`)
    }
        


//Activity :3 Switch Case
    //Task :4
    const day=1;
    switch(day){
        case 1:
            console.log('Today is Monday');
            break;                     //If your don't write the break this will go to next case  automatically
        case 2:
            console.log(`Today is Tuesday`);
            break;
        case 3:
            console.log(`Today is Wednesday`);
            break;
        case 4:
            console.log(`Today is Thursday`);
            break;
        case 5:
            console.log(`Today is Friday`);
            break;
        case 6:
            console.log(`Today is Saturday`);
            break;
        case 7:
            console.log(`Today is Sunday`);
            break;
        default:
            console.log('you are out of syllables')
            break
    }


    //Task : 5
    const marks = 76
    switch (true) {
        case (marks >= 90):
            console.log(`You Got A+`)
            break;
        
            case (marks >= 80):
            console.log(`You Got A`)
            break;
        
            case (marks >= 70):
            console.log(`You Got B+`)
            break;
        
            case (marks >= 60):
            console.log(`You Got B`)
            break;
        
             case (marks >= 40):
             console.log(`You Got c`)
            break;
          default:
            console.log(`your failed `)
            break;
    }
        


// Activity :4 Conditional (Ternary ) Operator
//Task :6
const myage = 19
myage > 18 ? console.log("you can   vote") : console.log('you are not ready  for vote')  // output is you can vote
myage > 23 ? console.log('you can drive') : console.log(`you can't drive`) // You can't drive

// Activity :5 Combining Conditions

//Task :7
const year = 1900
if (year % 4 === 0 && (year % 100 !== 0 || year % 400 ==0)) {
    console.log(`Given year is leap year`)
} else {
    console.log(`Given year is not a leap year`)
}
  