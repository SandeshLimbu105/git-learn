const todolist = ['make dinner', 'wash dishes'];
let todolistHtml = '';

for (let i = 0; i < todolist.length; i++) {
  const todo = todolist[i];
  const html = `<p>${todo}</p>`;
  todolistHtml += html;
}

document.querySelector('.js-todo-list').innerHTML=todolistHtml;


function addtodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  todolist.push(name);
  console.log(todolist);
  inputElement.value = '';

  // Rebuild HTML with new item
  let newHtml = '';
  for (let i = 0; i < todolist.length; i++) {
    const todo = todolist[i];
    newHtml += `<p>${todo}</p>`;
  }
  document.querySelector('.js-todo-list').innerHTML = newHtml;
}
function remove(){
  todolist.pop();
  let newHtml = '';
  for (let i = 0; i < todolist.length; i++) {
    const todo = todolist[i];
    newHtml += `<p>${todo}</p>`;
  }
  document.querySelector('.js-todo-list').innerHTML = newHtml;
}
