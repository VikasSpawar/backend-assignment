const express = require('express');
const { auth } = require('../../middleware/auth');
const Task = require('../../models/Task');
const { 
  getTasks, 
  createTask, 
  getTask, 
  updateTask, 
  deleteTask 
} = require('../../controllers/taskController');

const router = express.Router();

// Apply auth to ALL routes
router.use(auth);

router.route('/')
  .get(getTasks)
  .post(createTask);

router.route('/:id')
  .get(getTask)
  .put(updateTask)
  .delete(deleteTask);

module.exports = router;
