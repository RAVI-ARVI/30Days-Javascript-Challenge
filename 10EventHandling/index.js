
//Task :1
const btn = document.getElementById('btn')
const para = document.getElementById('para')
btn.addEventListener('click', () => {
    para.innerText="para text was updated after the click"
    
})


//Task :2

const img = document.getElementById('myimage')

img.addEventListener('dblclick', () => {
    console.log("this is clicked")
    img.setAttribute('src','https://picsum.photos/id/237/200/300')
})


//Task :3

const box = document.querySelector('.div')
box.addEventListener('mouseover', () => {
    box.style.backgroundColor="red"
})

//Task :4

box.addEventListener('mouseout', () => { 
    box.style.backgroundColor='aqua'
})


//Task :5
const Input = document.getElementById('input')
Input.addEventListener('keydown', (e) => {
    console.log(e.key,"this is test")
    
})


//task :6
const mypara= document.getElementById('mypara')
Input.addEventListener('keyup', (e) => {
   
  
    mypara.textContent = Input.value
    
    
})


//Task : 7

const form = document.getElementById('myForm');

// Add a submit event listener to the form
form.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Create a FormData object from the form
    const formData = new FormData(form);
   

    // Convert the FormData object to an object
    const formDataObj = {};
  
    formData.forEach((value, key) => {
        console.log(value, "here you will get the value of user entered")
        console.log(key,"here key you will get the name , email")
        formDataObj[key] = value;
    });


    //2nd way

    console.log( formData.entries(),"test")
    for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`,);
    }

    // Log the form data to the console
    console.log(formDataObj);
});


// Task :8

const dropdown = document.getElementById('dropdown');
const displayParagraph = document.getElementById('displayParagraph');

// Add a change event listener to the select dropdown
dropdown.addEventListener('change', function() {
    // Get the selected value from the dropdown
    const selectedValue = dropdown.value;

    // Display the selected value in the paragraph element
    displayParagraph.textContent = `Selected: ${selectedValue}`;
});


// Task : 9

const itemList = document.getElementById('itemList');

// Add a click event listener to the list element using event delegation
itemList.addEventListener('click', function(event) {
    // Check if the clicked element is a list item (li)
    if (event.target && event.target.nodeName === 'LI') {
        // Log the text content of the clicked list item
        console.log(event.target.textContent);
    }
});


//Task : 10

  // Get references to the parent, add button, and list elements
  const parent = document.getElementById('parent');
  const addButton = document.getElementById('addButton');
  const itemLists = document.getElementById('itemLists');

  // Add a click event listener to the add button to dynamically add list items
  addButton.addEventListener('click', function() {
      const newItem = document.createElement('li');
      newItem.textContent = `Item ${itemLists.children.length + 1}`;
      itemLists.appendChild(newItem);
  });

  // Add a click event listener to the parent element using event delegation
  parent.addEventListener('click', function(event) {
      // Check if the clicked element is a list item (li)
      if (event.target && event.target.nodeName === 'LI') {
          // Log the text content of the clicked list item
          console.log(event.target.textContent);
      }
  });

