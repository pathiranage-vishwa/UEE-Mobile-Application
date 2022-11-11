//create donation model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var donationSchema = new Schema
({
    eventID: {
        type: String,
        required: true,
        trim: true
    },
    eventName: {
        type: String,
        required: true,
        trim: true
    },
    userId: {
        type: String,
        required: true,
        trim: true
    },
    userName: {
        type: String,
        required: true,
        trim: true
    },
    plantName: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    amount: {
        type: Number,
        required: true,
        trim: true
    },
    date: {
        type: String,
        required: true,
        trim: true
    },

});




module.exports = mongoose.model('PlantDonation', donationSchema);