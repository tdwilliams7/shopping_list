let list = document.getElementsByTagName('ul')[0];

const newFood = document.getElementById('newFoodInput');


// let addNewItem = document.createElement('li');
// let newItemText = document.createTextNode('onions');
// addNewItem.appendChild(newItemText);
// // list.appendChild(addNewItem);
// eventHandlers ={
//   addButton: function(){
//     let addButtonEl = document.getElementById('addFoodButton');
//     addButtonEL.addEventListener('click', function(){handlers.addNewItem();});
//   }
// }

// handlers = {
//   addNewItem: function() {
//   let addNewItem = document.createElement('li');
//   let newItemText = document.createTextNode(newFood.value);
//   addNewItem.appendChild(newItemText);
//   list.appendChild(addNewItem);
//   let deleteButton = document.createElement('button');
//   let buttonText = document.createTextNode('Delete');
//   deleteButton.appendChild(buttonText);
//   deleteButton.setAttribute('id', 'l' + (document.querySelectorAll('li').length))
//   list.appendChild(deleteButton);
//   newFood.value.innerHTML = '';
//   },

// }

let alert = document.getElementById('alert');


var addFoodItemButton = document.getElementById('addFoodButton');
addFoodItemButton.addEventListener('click', function(){
  if (newFood.value.length > 0){
  let addNewItem = document.createElement('li');
  let newItemText = document.createTextNode(newFood.value);
  addNewItem.appendChild(newItemText);
  list.insertBefore(addNewItem, list.firstChild);
  let check = document.createElement('input');
  check.setAttribute('type', 'checkbox');
  addNewItem.appendChild(check);
  let deleteButton = document.createElement('button');
  let buttonText = document.createTextNode('Delete');
  deleteButton.appendChild(buttonText);
  deleteButton.setAttribute('id', 'l' + (document.querySelectorAll('li').length))
  deleteButton.setAttribute('onClick', 'deleteFoodButton(this)');
  addNewItem.appendChild(deleteButton);

  newFood.value = '';

  alert.textContent = '';
  } else {

    alert.textContent = 'Please enter a food Name';
  }

});


function deleteFoodButton(e){

  e.parentNode.remove(e.id)

}
