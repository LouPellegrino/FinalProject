class TaskManager {
    constructor(currentId = 0) {
        this.task = [];
        this.currentId = currentId;
    }

    addTask(formname, formAssignedTo, formduedate, formstatus, formdescription) {
        const newTask = {
            id: this.curentId++,
            formname: formname,
            formAssignedTo: formAssignedTo,
            formduedate: formduedate,
          formdescription: formdescription,
 
            formstatus: formstatus,
        };

// console.log(newTask);

        this.task.push(newTask);
    }
    
    

      //update Task//
      getTaskById(TaskId){
    let foundTask;
    for(let i=0; i < this.task.length; i++ ){
      const tasks = this.task[i];
      if(tasks.id === TaskId ){
        foundTask = task;
      };

      };
      return foundTask;
    }



   /*Display list of card*/
  render() {
      const taskHtmlList = [];

      for(let i = 0; i < this.task.length; i++) {
        const tasks = this.task[i];
    /*Format date - dd/mm/yyyy */
      // Get the Javascript object new Date, give it the argument tasks.formduedate, and assign it to a variable
        const DueDate = new Date(tasks.formduedate);
      // Save the formatted date in a variable
        const formattedDate = DueDate.getDate() + '/' + (DueDate.getMonth() + 1) + '/' + DueDate.getFullYear();  
        
        const taskHtml = createTaskHtml(tasks.formname, tasks.formAssignedTo, tasks.formdescription, formattedDate, tasks.formstatus);

        taskHtmlList.push(taskHtml);
      };
        const tasksHtml = taskHtmlList.join('\n');

        const taskList = document.querySelector('#task-card');
        taskList.innerHTML = tasksHtml;

    };  
    
}
const createTaskHtml = ( id, formname, formdescription, formAssignedTo, formstatus, formstatus) => `
    <li class="list-group-item" data-task-id=${id}>
        <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
            <h5>${formname}</h5>
            <span class="badge ${formstatus === 'TODO' ? 'badge-danger' : 'badge-success'}">${formstatus}</span>
        </div>
        <div class="d-flex w-100 mb-3 justify-content-between">
            <small>Assigned To: ${formAssignedTo}</small>
            <small>Due: ${DueDate}</small>
        </div>
        <p>${formdescription}</p>
        <div class="d-flex w-100 justify-content-end">
            <button class="btn btn-outline-success done-button ${formstatus === 'TODO' ? 'visible' : 'invisible'}">Mark As Done</button>
        </div>
    </li>
`;
module.exports = TaskManager;
