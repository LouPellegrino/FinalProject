class TaskManager {
    constructor(currentId = 0) {
        this.task = [];
        this.currentId = currentId;
      }
  
    //Added the formstatus as a paramenter in the addTask
    addTask(formname, formAssignedTo, formduedate, formstatus, formdescription) {
        const newTask = {
            id: this.currentId++,
            formname: formname,
            formAssignedTo: formAssignedTo,
            formduedate: formduedate,
            formstatus: formstatus, //change the status value here to get all the options - dropdown
            formdescription: formdescription,
        };

        this.task.push(newTask);
    };

/* Update status*/ 
  // Method to get the task id to update status 
getTaskById(taskId) {
  let foundTask;

  for (let i = 0; i < this.task.length; i++) {
   
     const task = this.task[i];
     console.log(task)

    if(task.id === taskId){
      foundTask = task;
    };
   };
 console.log(foundTask);
 return foundTask;
};

save() {
  // Create a JSON string of the tasks
const taskJson = JSON.stringify(this.task);

// Store the JSON string in localStorage
localStorage.setItem('task', taskJson);

// Convert the currentId to a string;
const currentId = String(this.currentId);

// Store the currentId in localStorage
localStorage.setItem('currentId', currentId);
}

load() {
  // Check if any tasks are saved in localStorage
  if (localStorage.getItem('task')) {
    // Get the JSON string of tasks in localStorage
    const taskJson = localStorage.getItem('task');
    
    // Convert it to an array and store it in our TaskManager
    this.task = JSON.parse(taskJson);
  }
  
  // Check if the currentId is saved in localStorage
  if (localStorage.getItem('currentId')) {
    // Get the currentId string in localStorage
    const currentId = localStorage.getItem('currentId');
    
    // Convert the currentId to a number and store it in our TaskManager
    this.currentId = Number(currentId);
  }
}

/*Display list of card*/
render() {
  const taskHtmlList = [];

  for(let i = 0; i < this.task.length; i++) {
    const tasks = this.task[i];

    const DueDate = new Date(tasks.formduedate);
  // Save the formatted date in a variable
    const formattedDate = DueDate.getDate() + '/' + (DueDate.getMonth() + 1) + '/' + DueDate.getFullYear();  
    
    const taskHtml = createTaskHtml(tasks.id, tasks.formname, tasks.formAssignedTo, formattedDate, tasks.formstatus, tasks.formdescription);

    taskHtmlList.push(taskHtml);
  };
    const tasksHtml = taskHtmlList.join('\n');

    const taskList = document.querySelector('#task-card');
    taskList.innerHTML = tasksHtml;
  };
  
 
}; 
  // Here we want to match the parent element id with the clicked button 'mark as done' to garantee the user is clicking in the correct li item. So we added 'data-task-id=${id}' in the <li> to that and also added id as one of the paramenters to get the id variable.
  const createTaskHtml = (id, formname, formAssignedTo, formduedate, formstatus, formdescription) => {

    return `
            <li data-task-id=${id} class="list-group-item mt-2">
            <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
            <h5>${formname}</h5>
            <span class="badge ${formAssignedTo === 'Vasavi' ? 'badge-dark' : 'badge-info'}">${formAssignedTo}</span>
            <span class="badge ${formstatus === 'To do' ? 'badge-warning' : 'badge-success'}">${formstatus}</span>
            </div>
            <div class="d-flex w-100 mb-3 justify-content-between">
            <small>Description: ${formdescription}</small>
            </div>
            <div class="d-flex w-100 mt-3 justify-content-between align-items-center">
            <small>DueDate: ${formduedate}</small>
            <button class="btn btn-outline-success done-button ${formstatus === 'To do' ? 'visible' : 'invisible'}">Mark As Done</button>
            </div>
            </li>
          `;
       
  }

  
 module.exports = TaskManager;
