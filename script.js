let list = document.getElementsByTagName('ul')[0];
let newFood = document.getElementById('newFoodInput');

// let addNewItem = document.createElement('li');
// let newItemText = document.createTextNode('onions');
// addNewItem.appendChild(newItemText);
// list.appendChild(addNewItem);


handlers = {
  addNewItem: function() {
  let addNewItem = document.createElement('li');
  let newItemText = document.createTextNode(newFood.value);
  addNewItem.appendChild(newItemText);
  list.appendChild(addNewItem);
  let deleteButton = document.createElement('button');
  let buttonText = document.createTextNode('Delete');
  deleteButton.appendChild(buttonText);
  deleteButton.setAttribute('id', 'l' + (document.querySelectorAll('li').length))
  list.appendChild(deleteButton);
  },
  deleteFoodItem: function(position){
    this.list.splice(position, 1);
  }
}

