//create task router

var express = require('express');
var router = express.Router();
var eventTaskController = require('../controllers/eventTaskController.js');

router.post('/', eventTaskController.createTask);
router.get('/', eventTaskController.getTasks);
router.get('/:id', eventTaskController.getTaskById);
router.get('/event/:id', eventTaskController.getTaskByEventId);
router.put('/:id', eventTaskController.updateTask);
router.delete('/:id', eventTaskController.deleteTask);

module.exports = router;