var form = document.getElementById('Forms');
var itemList = document.getElementById('items');


const studentsContainer = document.getElementById('.students');
const nameInput =form["name"];
const emailInput =form["email"];
const phonenumberInput =form["phonenumber"];

// Add item
form.addEventListener('submit',addItem);

const students = JSON.parse(localStorage.getItem("students")) || [];

function addItem(e){
    e.preventDefault();
  
    // Get input value
    var newItem = document.getElementById('username').value;
    var newItem2= document.getElementById('EmailId').value;
    var newItem3 = document.getElementById('phonenumber').value;
    
        // Create new li element
   var li = document.createElement('li');
   
   // Add class
   li.className = 'list-group-item';
   // Add text node with input value
   li.appendChild(document.createTextNode(newItem));
   li.appendChild(document.createTextNode(newItem2));
   li.appendChild(document.createTextNode(newItem3));
   itemList.appendChild(li); 



   
//delete btn
itemList.addEventListener('click',removeItem);

var deleteBtn = document.createElement('button');
deleteBtn.className=('btn btn-danger btn-sm float-right delete');
deleteBtn.appendChild(document.createTextNode('Delete'));
li.appendChild(deleteBtn);
itemList.appendChild(li);


    form.onsubmit = e => {
    e.preventDefault();
  
    const newStudent = students(
      nameInput.value,
      emailInput.value,
      phonenumberInput.value
    );
  
    createStudentElement(newStudent);
  
    nameInput.value = "";
    emailInput.value = "";
    phonenumberInput.value = "";
  };
}
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure')){
            var li = e.target.parentElement;
            itemList.removeChild(li);}
     

            
    
        }
}


