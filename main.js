var form = document.getElementById('addForm');
var itemList=document.getElementById('items');

//Form Submit event
form.addEventListener('submit',addItem);

//Delete event
itemList.addEventListener('click',removeItem);
//Add Item
function addItem(e){
    e.preventDefault();
 
// Get input value
var newItem= document.getElementById('item').value;

//Create new li element
var li =document.createElement('li');

//Add class
li.className='list-group-item';
console.log(li);

//Add TextNode with input value
li.appendChild(document.createTextNode(newItem));

//create del button Element
var deleteBtn = document.createElement('button');


// Add classes to delete button
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

//Append textNode
deleteBtn.appendChild(document.createTextNode('x'));

//Append button to li
li.appendChild(deleteBtn);


//Append li to list
itemList.appendChild(li);
}

//remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
        }
    }
}
