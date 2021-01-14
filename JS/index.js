
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
    // Save tasks
    taskManager.save() //it was missing the save here
   // Render the tasks
   taskManager.render();
});

  function validFormFieldInput(data){
    return data !== null && data !== '';
  };
   
// /* Update status */

/*const taskCard = document.querySelector('#task-card');
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
    
});*/
const taskCard = document.querySelector('#task-card');
// Add an 'onclick' event listener to the Tasks List
taskCard.addEventListener('click', (event) => {
    // Check if a "Mark As Done" button was clicked
    if (event.target.classList.contains('done-button')) {
        
        const button = event.target;
        const parentTask = button.parentElement.parentElement;
        console.log(parentTask);
       /**The problem was here in line 101
        * you put id instead of taskId so it wasn't maching the paramenter in the method getTaskId() on TaskManager.
       */
        const taskId = Number(parentTask.dataset.taskId);
       
        const task = taskManager.getTaskById(taskId);
        console.log(task);
        
        task.formstatus = 'DONE';
        //Don't need this if statement here. The string template literal createTaskHtml on TaskManger does that for you in he if statement in the span element.
        /*if(task.formstatus === 'DONE'){
            const badge = parentTask.getElementsByClassName('badge');
            badge[0].classList.remove('badge.warning');
            badge[0].classList.add('badge-success');
            badge[0].innerHTML = 'Done';
            button.remove();
        };
        // console.log(tasks.formstatus);
     
         task.status = 'Mark as Done';*/
        // Save the tasks in the local storage
        taskManager.save();  
        // Render the tasks
        taskManager.render();
  
    }
});




  
 



