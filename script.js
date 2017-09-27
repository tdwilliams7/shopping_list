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
  },
}

