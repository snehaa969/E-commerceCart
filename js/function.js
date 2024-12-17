document.addEventListener('DOMContentLoaded', () => {
    // Code will run after the DOM is fully loaded


const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const taskCount = document.getElementById('task-count');

// Array to store todos
let todos = [];

// Load todos from localStorage when the page loads
function loadTodos(){
    const savedTodos = localStorage.getItem('todos');
    if(savedTodos){
        todos = JSON.parse(savedTodos);
        renderTodos();
    }
}
// Save todos to localStorage
function savedTodos(){
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Render todos to the DOM
function renderTodos(){
    // Clear the current list
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        // Create todo text element
        const todoText = document.createElement('span');
        todoText.textContent = todo.Text;
        if(todo.completed){
            todoText.classList.add('completed');
        }

         // Create complete button
        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.classList.add('complete-btn');
        completeBtn.addEventListener('click', () => toggleComplete(index));

        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => deleteTodo(index));

         // Append elements to list item
        li.appendChild(todoText);
        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);

        todoList.appendChild(li);
    });
    // Update task count
    updateTaskCount();
}

// Add a new todo
function addTodo(){
        const todoText = todoInput.value.trim();
        if(todoText){
            todos.push({
                text: todoText,
                completed: false
            });
            todoInput.value = ''; // Clear input
            savedTodos();
            renderTodos();
        }
    }

     // Toggle todo completion
     function toggleComplete(index) {
        todos[index].completed = !todos[index].completed;  
        savedTodos();
        renderTodos();
    }

    // Delete a todo
    function deleteTodo(index) {
        todos.splice(index, 1);
        savedTodos();
        renderTodos();
    }

    // Update task count    
    function updateTaskCount(){
        const remainingTasks= todos.filter(todo => !todo.completed).length;
        taskCount.textContent = `${remainingTasks} tasks remaining`;
    }
    
     // Event Listeners
    // Add todo when Add button is clicked
    addBtn.addEventListener('click', addTodo);

    // Add todo when Enter key is pressed in input
    todoInput.addEventListener('keypress', (e) => {
        if(e.key === "Enter"){
            addTodo();
        }
    });
    // Initial load of todos
    loadTodos();

});