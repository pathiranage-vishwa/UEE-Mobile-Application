//create eventTask model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventTaskSchema = new Schema({
    eventID: {
        type: String,
        required: true,
        trim: true  
    },
    taskName: {
        type: String,
        required: true,
        trim: true
    },
    taskDescription: {
        type: String,
        required: true,
        trim: true
    },
    startDate: {
        type: String,
        required: true,
        trim: true
    },
    endDate: {
        type: String,
        required: true,
        trim: true
    },
    cost: {
        type: Number,
        required: true,
        trim: true
    },

});

module.exports = mongoose.model('EventTask', eventTaskSchema);
