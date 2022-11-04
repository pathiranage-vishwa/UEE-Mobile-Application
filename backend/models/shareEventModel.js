const mongoose = require("mongoose");

const ShareEventSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required: true,
        trim: true,
    },
    eventCaption: {
        type: String,
        required: true,
        trim: true,
    },
    postDate: {
        type: String,
        required: true,
        trim: true,
    },
    uploadImage: {
        type: String,
        required: true,
        trim: true,
    },
});

const Event = mongoose.model("events", ShareEventSchema);
module.exports = ShareEvent;
