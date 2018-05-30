const express = require('express');
const taskRoutes = require('./server/task/task.routes');
const router = express.Router();

router.use('/tasks', taskRoutes);

module.exports = router;

