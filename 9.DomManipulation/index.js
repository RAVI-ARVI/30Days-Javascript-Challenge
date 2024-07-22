//Task :1

const myId = document.getElementById("myId");
console.log(myId)
myId.innerText = "Text updated"


//Task :2

const myclass = document.getElementsByClassName('myClass')[0]

myclass.style.backgroundColor="yellow"


//Task :3
const div = document.createElement("div")
div.innerText="this is append to the end of the body "
document.body.appendChild(div)


//Task :4
const ullist = document.querySelector('ul')
const li = document.createElement("li")
li.innerText="this is li text"
ullist.appendChild(li)

//Task :5
const deleteThis = document.querySelector('#delete')
deleteThis.remove()


//Task :6
const parent = document.querySelector('#parent')
console.log(parent.lastElementChild)

if (parent.lastElementChild) {
    // Remove the last element child of the parent element
    parent.removeChild(parent.lastElementChild);
}
  
//Task :7

let imageElement = document.querySelector('#myImage'); // Replace '#myImage' with the specific selector of your element

// Change the src attribute of the image element
imageElement.setAttribute('alt', 'alt name update');


//Task :8
const element = document.getElementById('myElement');
function addClass() {
    // Select the HTML element by its id

    // Add the 'highlight' class to the element
    element.classList.add('highlight');
}

function removeClass() {
  
   
    // Remove the 'highlight' class from the element
    element.classList.remove('highlight');
}


//Task :9

const mybutton = document.getElementById('my-button')
mybutton.addEventListener('click', () => {
    const bold = document.getElementById('bold')
    bold.innerText = "This text is updated bro"
})

//Task :10

const mydiv = document.getElementById('mouse')
myId.addEventListener('mouseover', () => {
   
    mydiv.style.backgroundColor ='blue'
})
// myId.addEventListener('mouseleave', () => {
//     console.log('Mouse hover')
//     mydiv.style.backgroundColor ='yellow'
// })