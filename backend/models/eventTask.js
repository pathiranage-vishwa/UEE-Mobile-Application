//create eventTask model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventTaskSchema = new Schema({
    eventId:String,
    Taskname: String,
    startDate: String,
    cost: Number,
    endDate: String,
    description: String,
});

module.exports = mongoose.model('EventTask', eventTaskSchema);
