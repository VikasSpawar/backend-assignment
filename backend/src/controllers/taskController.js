const Task = require('../models/Task');

/**
 * @swagger
 * /api/v1/tasks:
 *   get:
 *     summary: Get user's tasks
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of tasks
 *   post:
 *     summary: Create new task
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [title]
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [pending, completed]
 *     responses:
 *       201:
 *         description: Task created
 */

// GET /api/v1/tasks - List user's tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user._id })
      .sort({ createdAt: -1 })
      .limit(20);
    
    res.json({
      success: true,
      count: tasks.length,
      data: tasks
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};

// POST /api/v1/tasks - Create new task
const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    
    if (!title) {
      return res.status(400).json({ 
        success: false, 
        message: 'Title is required' 
      });
    }

    const task = new Task({ 
      title, 
      description, 
      userId: req.user._id 
    });
    await task.save();

    res.status(201).json({
      success: true,
      data: task
    });
  } catch (error) {
    res.status(400).json({ 
      success: false, 
      message: error.message 
    });
  }
};

// GET /api/v1/tasks/:id - Single task
const getTask = async (req, res) => {
  try {
    const task = await Task.findOne({ 
      _id: req.params.id, 
      userId: req.user._id 
    });
    
    if (!task) {
      return res.status(404).json({ 
        success: false, 
        message: 'Task not found' 
      });
    }

    res.json({
      success: true,
      data: task
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};

// PUT /api/v1/tasks/:id - Update task
const updateTask = async (req, res) => {
  try {
    const updates = {};
    if (req.body.title) updates.title = req.body.title;
    if (req.body.description !== undefined) updates.description = req.body.description;
    if (req.body.status) updates.status = req.body.status;

    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      { $set: updates },
      { new: true, runValidators: true }
    );

    if (!task) {
      return res.status(404).json({ 
        success: false, 
        message: 'Task not found' 
      });
    }

    res.json({
      success: true,
      data: task
    });
  } catch (error) {
    res.status(400).json({ 
      success: false, 
      message: error.message 
    });
  }
};

// DELETE /api/v1/tasks/:id - Delete task
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ 
      _id: req.params.id, 
      userId: req.user._id 
    });

    if (!task) {
      return res.status(404).json({ 
        success: false, 
        message: 'Task not found' 
      });
    }

    res.json({
      success: true,
      message: 'Task deleted successfully'
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};

module.exports = { getTasks, createTask, getTask, updateTask, deleteTask };
