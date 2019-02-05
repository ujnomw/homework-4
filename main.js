// TASK 1
(function() {
  const start_elem = document.body.getElementsByClassName('deepChild')[0];
  const nameDisplayer = document.body.getElementsByClassName('blockName')[0];
  // Вывод имени тега
  function showTagName(nameToShow) {
    nameDisplayer.innerHTML = nameToShow;
    return;
  }
  // Добавсление стилей блоку
  function showTag(elementToShow){
    elementToShow.style.border = '2px solid #000';
  }
  // Рекурсивынй обход дерева документа до элемента с классом 'parent'
  function getParent(current_element) {
    if (current_element.className !== 'parent'){
      setTimeout(() => {
        showTagName(current_element.tagName);
        showTag(current_element);
        getParent(current_element.parentElement);
      }, 300)
    } else {
      return;
    }
  }

  getParent(start_elem);
}());

//TASK 2
(function() {
  var start_elem = document.body.getElementsByClassName('deepChild')[0];
  function redBorder(el) {
    el.style.border = '2px solid red';
  }

  function greenBorder(el) {
    el.style.border = '2px solid green';
  }

  function getParent(current_element) {
    while (current_element.className !== 'sibling first') {
      setTimeout(function(element) {
        redBorder(element)
      }, 300, current_element)
      current_element = current_element.parentElement;
    }
    redBorder(current_element);
    return current_element;
  }

  function getChild(current_element){
    while (current_element.className !== 'deepChild'){
      setTimeout(function(element) {
        greenBorder(element)
      }, 300, current_element)
      current_element = current_element.firstElementChild;
    }
    greenBorder(current_element);
  }

  const firstsibling = getParent(start_elem);
  const secondsibling = firstsibling.nextElementSibling;
  getChild(secondsibling);

}());

// TASK 2 TABLE
(function() {
  const dataTable = [
    {
        name: 'name1',
        value: '1'
    },
    {
        name: 'name2',
        value: '2'
    },
    {
        name: 'name3',
        value: '3'
    },
    {
        name: 'name4',
        value: '4'
    },
];

let table = '';

dataTable.forEach(function(currentValue) {

  table += '<tr><td>' + currentValue['name'] + '</td><td>' + currentValue['value'] + '</td></tr>';
})
table = '<table>' + table + '</table>';
let tableSection = document.getElementById('table');
tableSection.innerHTML = table;
}());
