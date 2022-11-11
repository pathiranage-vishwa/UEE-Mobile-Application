//create TaskController function
const Task = require('../models/eventTask');

const createTask = function(req, res) {
    var task = new Task(req.body);
    task.save(function(err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(result);
        }
    });
};
//create Task get function
const getTasks = function(req, res) {
    Task.find({}, function(err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(result);
        }
    });
};
//create Task get by id function
const getTaskById = function(req, res) {
    Task.findById(req.params.id, function(err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(result);
        }
    });
};
//create Task update function
const updateTask = function(req, res) {
    Task.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(result);
        }
    });
}
//create Task delete function
const deleteTask = function(req, res) {
    Task.findByIdAndRemove(req.params.id, function(err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(result);
        }
    });
};

module.exports = {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask
};


