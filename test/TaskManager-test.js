const TaskManager = require('../JS/TaskManager');
const assert = require('assert');

describe("TaskManager", () => {
  it("should add a Task", function () {
    //Setup
    const taskManager = new TaskManager(0);
    let len = taskManager.task.length;
    //Exercise
    taskManager.addTask();
    //Verify
    assert.ok(len < taskManager.task.length);
  });
  
  it("should delete a task", function () {
    const taskManager = new TaskManager(0);
    taskManager.addTask("formname", "formAssignedTo", "formduedate", "formstatus", "formdescription")
    let len = taskManager.tasks.length;
   
    taskManager.deleteTask(0)
    assert.ok(len > taskManager.tasks.length);
  })


  it('should return a task by taskId', () => {
    // Setup
    const taskManager = new TaskManager(0);
    const expectedTaskId = 1; 
    taskManager.addTask();
    const len = taskManager.task.length;

    // Exercise
    const result = taskManager.getTask(1);
    
    // Verify
    assert.strictEqual(result.taskId, expectedTaskId);
  });


});