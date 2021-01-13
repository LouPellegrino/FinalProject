
const taskManager = new TaskManager(0);
taskManager.load();
taskManager.render();
const addTaskForm = document.querySelector('#addTaskForm');


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

    }
    else {
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
   
/* Update status */
const taskCard = document.querySelector('#task-card');
taskCard.addEventListener('click', (event) => {
    if (event.target.classList.contains('done-button')) {
        const parentTask = event.target.parentElement.parentElement;

        const taskId = Number(parentTask.dataset.taskId);

        const task = taskManager.getTaskById(taskId);
   
        task.formstatus = 'DONE';
        
  
        // Save the tasks to localStorage
        taskManager.save();

        taskManager.render();
        
    }
    
});
    
// Add an 'onclick' event listener to the Tasks List
taskCard.addEventListener('click', (event) => {
    // Check if a "Mark As Done" button was clicked
    if (event.target.classList.contains('done-button')) {
        
        const button = event.target;
        const parentTask = event.target.parentElement.parentElement;

       
        const taskId = Number(parentTask.id);
    
       
        const task = taskManager.getTaskById(taskId);
        
        task.formstatus = 'DONE';

        if(task.formstatus === 'DONE'){
            const badge = parentTask.getElementsByClassName('badge');
            badge[0].classList.remove('badge.warning');
            badge[0].classList.add('badge-success');
            badge[0].innerHTML = 'Done';
            button.remove();
        };
        // console.log(tasks.formstatus);
     
         task.status = 'Mark as Done';
        // Render the tasks
   taskManager.render();
  
    }
    taskManager.save();

    


});



  
 



