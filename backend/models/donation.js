//create donation model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var donationSchema = new Schema({
    eventId:String,
    name: String,
    email: String,
    amount: Number,
    date: Date
});

module.exports = mongoose.model('Donation', donationSchema);