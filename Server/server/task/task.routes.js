const express = require('express');
const tasks = require('./task.controller');
const router = express.Router();

router.route('/')
//GET /tasks get all tasks
.get(tasks.get_all_tasks)
//POST /tasks creates a new task
.post(tasks.create_task);


router.route('/:taskId')
  //GET /tasks/taskId Get a task
  .get(tasks.get)
  //PUT /tasks/taskId updates an existing task
  .put(tasks.update_task)
  //DELETE /tasks/taskId deletes an exisitng task
  .delete(tasks.delete_task);

//Load task when API with taskId route parameter is hit
router.param('taskId', tasks.load);

module.exports = router;