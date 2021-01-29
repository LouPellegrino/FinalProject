//unit testing by using mocha
const TaskManager = require('../JS/TaskManager');
const assert = require('assert');
// const { ContactlessOutlined } = require('@material-ui/icons');



describe("TaskManager", () =>{
 //testing adding a task
  describe(".addTask", () =>{
    it("it should add to a task", () =>{
      //setup
      const taskManager = new TaskManager();
      let len = taskManager.task.length;
      //execute
      taskManager.addTask();
      //verify
      assert.ok(len <taskManager.task.length);
    });
  });

  //testing if the delete button removes the task
  describe(".deleteTask", () => {
    it("it should delete the task", () =>{
      //setup
      const taskManager = new TaskManager(0);
      taskManager.task[0] ={id:0,
        Name: "task-1",
        AssignedTo: "Lou",
        DueDate: "17-01-2021",
        Status: "TODO",
        Description: "task-description"
};
        let len = taskManager.task.length;
        console.log(len);
        const inputTaskId = Number(taskManager.currentId);
        //execute
        taskManager.deleteTask(inputTaskId);
        console.log(taskManager.task.length);

        //verify
        assert.ok(len>taskManager.task.length);
});
});

  describe(".getTaskById", () =>{
    it("it should get by getTaskById", () =>{
      //setup
      const taskManager = new TaskManager(0);
      taskManager.task[0] = {id:0,
        Name: "task-1",
        AssignedTo: "lou",
        DueDate: "17-01-2021",
        Status: "TODO",
        Description: "task-description"
      };
      const inputTaskId = Number(taskManager.currentId);
      //execute
      const task = taskManager.getTaskById(inputTaskId);
      //verify
      assert.strictEqual(task.id,inputTaskId);
    });
  });

});