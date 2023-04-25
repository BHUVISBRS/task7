var itemList = document.querySelector('#items');
console.log(itemList.parentNode);


itemList.parentNode.style.backgroundColor='#f4f4f4';
console.log(itemList.parentNode.parentNode);

console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='#f4f4f4';
console.log(itemList.parentElement.parentElement);


var itemList = document.querySelector('#items');
console.log(itemList.childNode);
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='yellow';


console.log(itemList.firstChild);

console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent ='hello1'
itemList.lastElementChild.textContent ='hello4'


console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);

console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.backgroundColor='yellow';



var newDiv = document.createElement('div');
console.log(newDiv);
newDiv.className='hello';
newDiv.id='hello1';
var newDivText  = document.createTextNode('helloworld');
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1= document.querySelector('header h1');
console.log(newDiv);

newDiv.style.fontSize='30px';

container.insertBefore(newDiv,h1);