var form = document.getElementById('Forms');
var itemList = document.getElementById('items');
// Add item
form.addEventListener('submit',addItem);

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
deleteBtn.appendChild(document.createTextNode('delete'));
li.appendChild(deleteBtn);
itemList.appendChild(li);
}
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}


