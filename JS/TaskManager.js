class TaskManager {
    constructor(currentId = 0) {
        this.task = [];
        this.currentId = currentId;
      }
  

    addTask(formname, formAssignedTo, formduedate, formstatus, formdescription) {
        const newTask = {
            id: this.currentId++,  
            formname: formname,
            formAssignedTo: formAssignedTo,
            formduedate: formduedate,
            formstatus: formstatus,
            formdescription: formdescription   
        };
        this.task.push(newTask);
    };

   
     deleteTask(taskId) {
      
      const newTasks = [];
           for (let i = 0; i < this.task.length; i++) {
           const task = this.task[i];
           if (task.id !== taskId) {
           newTasks.push(task);
          }
             
      }
     
      this.task = newTasks;
      console.log(this.task);
  }
/* Update status*/ 
  // Method to get the task id to update status
getTaskById(taskId) {
     let foundTask;

     for (let i = 0; i < this.task.length; i++) {
      
        const task = this.task[i];

       if(task.id === taskId){
         foundTask = task;
       };
     };
     return foundTask;
        };

    save() {
        // Create a JSON string of the tasks
      
      const taskJson = JSON.stringify(this.task);
  console.log(taskJson);
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
      console.log(taskJson);
              // Convert it to an array and store it in our TaskManager
              this.task = JSON.parse(taskJson);
              console.log(this.task);
          }
      
          // Check if the currentId is saved in localStorage
          if (localStorage.getItem('currentId')) {
              // Get the currentId string in localStorage
              const currentId = localStorage.getItem('currentId');
      
              // Convert the currentId to a number and store it in our TaskManager
              this.currentId = Number(currentId);
          }
      }
     
  
   /*Display list of tasks*/
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
  
   /*Display list of card*/
  // render() {
  //     const taskHtmlList = [];

  //     for(let i = 0; i < this.task.length; i++) {
  //       const tasks = this.task[i];
    
  //       const DueDate = new Date(tasks.formduedate);
  //     // Save the formatted date in a variable
  //       const formattedDate = DueDate.getDate() + '/' + (DueDate.getMonth() + 1) + '/' + DueDate.getFullYear();  
        
  //       const taskHtml = createTaskHtml(tasks.formname, tasks.formAssignedTo, tasks.formdescription, formattedDate, tasks.formstatus);

  //       taskHtmlList.push(taskHtml);
  //     };
  //       const tasksHtml = taskHtmlList.join('\n');

  //       const taskList = document.querySelector('#task-card');
  //       taskList.innerHTML = tasksHtml;

  //   };  
    
  // 
  };
  
  const createTaskHtml = (id, formname, formAssignedTo, formduedate, formstatus, formdescription) => {
 
    return `
            <li data-task-id=${id} class="list-group-item mt-2">
            <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
            <h5>${formname}</h5>
            <h5><span style="pull:right;" class="badge ${formstatus === 'To do' || formstatus === 'In progress' || formstatus === 'Review' ? 'badge-warning' : 'badge-success'}">${formstatus}</span></div></h5>
            <h6><span class="badge ${formAssignedTo === 'Vasavi' ? 'badge-dark' : 'badge-info'}">${formAssignedTo}</span></h6>
            <div class="d-flex w-100 justify-content-between">
            <medium><strong>Description:</strong> ${formdescription} </medium>
            </div>
            <div class="d-flex w-100 justify-content-between align-items-center">
            <medium><strong>Due Date:</strong> ${formduedate} </medium>
            <button class="btn btn-outline-success done-button text-right ${formstatus === 'To do' || formstatus === 'In progress' || formstatus === 'Review' ? 'visible' : 'invisible'}">Mark As Done</button>
            <button class="btn delete-button btn-danger text-right">Delete</button>
            </div>
            </li>
            `;
       
  }

  
  
