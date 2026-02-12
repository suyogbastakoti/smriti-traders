const mongoose = require("mongoose");

//creating the contact schema for mongodb

const contactSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true, //removes extra spaces
    },
    phone:{
        type: String,
        required: true,
        trim: true,
    },
    message: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now, //automatically adds timestamps
    },
});

//creates a model called contact in MongoDB using the schema you defined.
module.exports = mongoose.model("contact", contactSchema);
