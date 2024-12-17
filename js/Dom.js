document.addEventListener('DOMContentLoaded', () =>{

    const todoInput = document.createElement('todo-input');
    const addBtn = document.createElement('add-btn');
    const todoList = document.createElement('todo-list');
    const taskCount = document.createElement('task-count');

    let todos = [];

    function loadTodos(){
        const savedTodos = localStorage.getItem('todos');
        if(savedTodos)
            todos = JSON.parse(savedTodos);
        renderTodos();
    }
    function savedTodos(){
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    function renderTodos(){
        todoList.innerHTML = '';
        todoList.forEach((todo, index) =>{
            const li = document.createElement('li');
            const todoText = document.createElement('span');
            todoText.textContent = todo.Text;
            if(todo.completed){
                todoText.classList.add('completed');
            }

            const completeBtn = document.createElement('button');
            completeBtn.textContent = "Complete";
            completeBtn.classList.add('complete-btn');
            completeBtn.addEventListener('click', () => toggleComplete(index));

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = "Delete";
            deleteBtn.classList.add('delete-btn');
            deleteBtn.addEventListener('click', ()=> deleteTodo(index));

            li.appendChild(todoText);
            li.appendChild(completeBtn);
            li.appendChild(deleteBtn);

            todoList.appendChild(li);
        });
        updateTaskCount();
    }

    function addTodos(){
        const todoText = todoInput.value.trim();
        if(todoText){
            todos.push({
                text: todoText,
                completed: false
            });
            todoInput.value = '';
            savedTodos();
            renderTodos();
        }
    }

    function toggleComplete(){
        todos[index].completed = !todos[index].completed;
        savedTodos();
        renderTodos();
    }

    function deleteTodo(){
        todos.splice(index, 1)
        savedTodos();
        renderTodos();
    }

    function updateTaskCount(){
        const remainingTasks = todos.filter(todo => !todo.completed).length;
        todoList.textContent = `${remainingTasks} is remaining`;
    }

    addBtn.addEventListener('click', ()=> addTodos);
    todoInput.addEventListener('keypress', (e)=>{
        if(e.key === 'Enter')
            addTodos();
    });
    loadTodos();
})