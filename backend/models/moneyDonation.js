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
    accountNumber: {
        type: Number,
        required: true,
        trim: true
    },
    bankName: {
        type: String,
        required: true,
        trim: true
    },
    branchCode: {
        type: Number,
        required: true,
        trim: true
    },
    amount: {
        type: Number,
        required: true,
        trim: true
    },
    image : {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: String,
        required: true,
        trim: true
    },

});




module.exports = mongoose.model('MoneyDonation', donationSchema);