// TRAVERSING THE DOM //
var itemList=document.querySelector('#items');

// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// // parent Element
// console.log(itemList.parentElement);
// itemList.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes);
// // console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='yellow';

// //firstChild//      (not used)
// console.log(itemList.firstChild);

// // firstElement Child
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='Hello 1';

// //lastElement
// console.log(itemList.lastChild);

// //lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='Hello 4';

// next sibling
// console.log(itemsList.nextSibling);

// //nextElementSibling
// console.log(itemList.nextElementSibling);

//previousSibling
// console.log(itemList.previousSibling);

//previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='green';

//createElement
// create a div  
var newDiv = document.createElement('div');

// //Add class
newDiv.className='hello';


// //add id
newDiv.id='hello1';

// //add attr
newDiv.setAttribute('title','Hello Div');



// // createTextNode
// var newDivText=document.createTextNode('Hello World');

// // // //add text to div
// newDiv.appendChild(newDivText);



// var container=document.querySelector('header .container');
// var h1=document.querySelector('header h1');


console.log(newDiv);
// newDiv.style.fontSize='30px';
// container.insertBefore(newDiv,h1);
