
const taskManager = new TaskManager(0);
const addTaskForm = document.querySelector('#addTaskForm');
console.log(taskManager);


addTaskForm.addEventListener('submit', (event) => {
 
    event.preventDefault();


    const name = document.querySelector('#name');
    const description = document.querySelector('#description');
    const AssignedTo = document.querySelector('#AssignedTo');
    const duedate = document.querySelector('#duedate');
    const status = document.querySelector('#status');
    const errorMessage = document.querySelector('#alertMessage');
    
    
    const formname = name.value;
    const formAssignedTo = AssignedTo.value;
    const formduedate = duedate.value;
    const formstatus = status.value;
    const formdescription = description.value;
    if(!validFormFieldInput(formname)){
        errorMessage.innerHTML = "Need to add a task name";
        errorMessage.style.display = "block"
          
    }  
    else if(!validFormFieldInput(formAssignedTo)){
        errorMessage.innerHTML = "Need to assign someone";
        errorMessage.style.display = "block"
   
    } 
    else if(!validFormFieldInput(formduedate)){
        errorMessage.innerHTML = "Need to add a date";
        errorMessage.style.display = "block"
   
    }
    else if(!validFormFieldInput(formstatus)){
        errorMessage.innerHTML = "Need to add a status";
        errorMessage.style.display = "block"

    }
    else if(!validFormFieldInput(formdescription)){
        errorMessage.innerHTML = "Need to add a task description";
        errorMessage.style.display = "block"

    }else{
        
        errorMessage.style.display = "none";
        taskManager.addTask(formname, formAssignedTo, formduedate, formstatus, formdescription);
        event.target.reset();
        
        
    }
       
  // Render the tasks
  taskManager.render();
});

function validFormFieldInput(data){
  return data !== null && data !== '';
};

// Update for tomorrow 
// /* Update status */
// const taskCard = document.querySelector('#task-card');

// // Add an 'onclick' event listener to the Tasks List
// taskCard.addEventListener('click', (event) => {
//     // Check if a "Mark As Done" button was clicked
//     if (event.target.classList.contains('done-button')) {
//         // Get the parent Task
//         const parentTask = event.target.parentElement.parentElement;

//         // Get the bookId of the parent Book.
//         const taskId = Number(parentTask.id);

//         // Get the book from the BookManager using the bookId
//         const task = taskManager.gettasknameId(taskId);

//         // Update the book status to 'READ'
//         task.status = 'Done';

//         // Render the books
//         taskManager.render();
//     }

//   });
// });

// // function validFormFieldInput(data){
// //     return data !== null && data !== '';
// // }