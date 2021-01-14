const TaskManager = require('../js/taskManager');
const assert = require('assert');

describe("TaskManager", () => {
  it("should add a Task", function () {
    //Setup
    const taskManager = new TaskManager(0);
    let len = taskManager.tasks.len;
    //Exercise
    taskManager.addTask();
    //Verify
    assert.ok(len < taskManager.tasks.len);
  });
  // delete the Task
  it('should delete a task', () => {
    // Setup
    const taskManager = new TaskManager(0);
    taskManager.addTask();
    const len = taskManager.tasks.len;

    // Exercise
    taskManager.deleteTask(1);
    
    // Verify
    assert.ok(len > taskManager.tasks.len);
  });
  //  Add task  by taskId

  it('should return a task by taskId', () => {
    // Setup
    const taskManager = new TaskManager(0);
    const expectedTaskId = 1; 
    taskManager.addTask();

    // Exercise
    const result = taskManager.getTask(1);
    
    // Verify
    assert.strictEqual(result.taskId, expectedTaskId);
  });


})
