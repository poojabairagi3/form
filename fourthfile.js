//QUERYSELECTORALL //
// var titles=document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent='Hello';
var odd =document.querySelectorAll('li:nth-child(odd)');
var even =document.querySelectorAll('li:nth-child(even)');
for (var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='#f4f4f4';
    even[i].style.backgroundColor='#ccc';
}
