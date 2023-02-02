//Selectors
const todoInput = document.querySelector('.todo-input'); //selcted the input element
const todoButton = document.querySelector('.todo-button'); // selcted the button
const todoList = document.querySelector('.todo-list'); // selcted the list
const filterOption = document.querySelector('.filter-todo'); //selected filter option

//Event Listeners 
todoButton.addEventListener('click', addTodo); // when button click, it will run addTodo Function
todoList.addEventListener('click', deleteCheck);// when button click, it will run deleteCheck Function
filterOption.addEventListener('click', filterTodo); //when button click, it will run filterTodo function


//Functions

// this function is used to add the list  
function addTodo(e) {
e.preventDefault(); // stop browser from refreshing

//Todo DIV
const todoDiv = document.createElement('div');
todoDiv.classList.add("todo");

// Create LI
const newTodo = document.createElement('li');
newTodo.innerText = todoInput.value;
newTodo.classList.add('todo-item'); // using this to style the css
todoDiv.appendChild(newTodo);

// Check Mark button
const completedButton = document.createElement('button');
completedButton.innerHTML = '<i class="fas fa-check"></i>';
completedButton.classList.add('complete-btn'); //using this to style the css
todoDiv.appendChild(completedButton)

// Check Trash button
const trashButton = document.createElement('button');
trashButton.innerHTML = '<i class="fas fa-trash"></i>';
trashButton.classList.add('trash-btn'); //using this to style the css
todoDiv.appendChild(trashButton);

//Append to list
todoList.appendChild(todoDiv);
//Clear Todo Input Value
todoInput.value = "";
}

// This function is used for the trash/completed button to work
function deleteCheck(e) {
   const item = e.target; 

     
   if (item.classList[0] === "trash-btn") {
      const todo = item.parentElement;
      //animation 
      todo.classList.add("fall");
      // this line is used for animation to start first, and when finish it then    delete the element
      todo.addEventListener('transitionend', function(){
         todo.remove();
      });
   }

   // Check Mark 
   if (item.classList[0] === "complete-btn") {
      const todo = item.parentElement;
      todo.classList.toggle("completed");
   }
}
// using this function for the filter option part
function filterTodo(e) {
   const todos = todoList.childNodes; // here we grab all the "todos" and "childNodes"
   //using forEach loop to check what we are choosing
   todos.forEach(function(todo){
      switch(e.target.value){
         // this is showing all of the "to-dos"
         case "all":
            todo.style.display = "flex"; // is showing all of them
            break;
         case "completed":
            // make sure only check the class of "completed" on them and show them
            if (todo.classList.contains('completed')){
               todo.style.display = 'flex'; // used display flex, bcz we used flex in the css
            } else {
               todo.style.display = "none"; // if they dont have the class of completed make sure you remove it
            } break;
         case "uncompleted":
            // make sure only check the class of "completed" on them and show them
            if (!todo.classList.contains('completed')){
               todo.style.display = 'flex';
            } else {
               todo.style.display = "none"; // if they dont have the class of completed make sure you remove it
            } break;
        }  
     });
}


