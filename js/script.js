
const todoControl = document.querySelector('.todo-control')
const headerInput = document.querySelector('.header-input')
const todoList = document.querySelector('.todo-list')
const todoCompleted = document.querySelector('.todo-completed')


const todoData = localStorage.getItem('todoData') 
  ? JSON.parse(localStorage.getItem('todoData')) 
  : [];

  render();

  function render  ()  {
    todoList.innerHTML = '';
    todoCompleted.innerHTML = '';

    todoData.forEach(item => {
      const li = document.createElement('li')
      li.classList.add('todo-item')
      li.innerHTML = '<span class="text-todo">' + item.text + '</span>' + 
        '<div class="todo-buttons">' +
          '<button class="todo-remove"></button>' +
          '<button class="todo-complete"></button>' +
        '</div>'

      item.completed ?  todoCompleted.append(li) :  todoList.append(li)

      li.querySelector('.todo-complete').addEventListener('click', () => {
        item.completed = !item.completed

        render();
      })
    li.querySelector('.todo-remove').addEventListener('click', () => {
      const index = todoData.indexOf(item)
      todoData.splice(index, 1)
      render()
    })
    })

    localStorage.setItem('todoData', JSON.stringify(todoData))
    
    console.log(localStorage);
  }
  todoControl.addEventListener('submit', (event) => {
  event.preventDefault();

  if(!headerInput.value) return;
  const newTodo = {
    text: headerInput.value,
    completed: false
  }

  todoData.push(newTodo)
  headerInput.value = ''

  render()
  })
