/*Här skriver ni koden*/
//Part one
var list = document.getElementById('list');
var addButton = document.getElementById('my-button');

console.log(list, addButton);

//Part two
addButton.addEventListener('click', function () {
  var input = document.getElementById('task').value;
  var makeList = document.createElement('li');
  var textInput = document.createTextNode(input);

  makeList.appendChild(textInput);

  if (input === '') {
    alert('Please insert a text in to the list');
  } else {
    list.appendChild(makeList);
    document.getElementById('task').value = '';

    console.log(makeList);
  }
  var deleteButton = document.createElement('button');
  var text = document.createTextNode('\u00D7');
  deleteButton.appendChild(text);

  makeList.appendChild(deleteButton);

  deleteButton.addEventListener('click', () => {
    var list = document.getElementById('list');
    list.removeChild(list.childNodes[0]);
  });
});
