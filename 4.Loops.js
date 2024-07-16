//Activity 1: For Loop
//Task:1 
for (let i = 1; i <= 10; i++){
    console.log(i)
}

//Task:2
for (let i = 1; i <= 10; i++){
    console.log(5*i)
}


//Activity 2:While Loop

// Task:3
let i = 1;
let sum=0
while (i <= 10) {
    sum += i;
    i++
    
    
}
console.log(sum)

//Task :4 
let j = 10;
while (j > 0) {
    console.log(j)
    j--
}

//Activity 3: Do While Loop 

//Task:5
let a = 1;

 
do {
    console.log(a)
    a++
    
} while (a <= 5)
    
//Task:6
    
let factorial = 5;
let result=1
do {
    if (factorial > 0) {
        result *= factorial
        
    }
    factorial--
} while (factorial > 0)
console.log(result, "result")
    




// Task 7 Nested Loops

for (let x = 1; x <= 5; x++){
   
    let patter=''
    for (let y = 1; y <= x; y++){
        patter+='*'
        
    }
    console.log(patter)
}

//Activity : 5

//Task:8
for (let x = 1; x <= 10; x++){
    if (x == 5) continue  // here condition will skip
    console.log(x)

}

//Task:9 
for (let h = 1; h < 10; h++){
    if (h == 5) break  // here loop will break
    console.log(h)
}
