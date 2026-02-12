const Contact = require("../models/contact");

//controller to save contact form

const submitContactForm = async(req, res)=>{
    try {
        const {name, phone, message} = req.body;

        //simple validation
        if(!name || !phone || !message){
            return res.status(400).json({message:"All fields are required"});
        }
        //create new contact document
        const contact = new Contact({
            name, 
            phone,
            message,
        });

        //save to database
        await contact.save();

        //send success response
        res.status(201).json({message:"Message sent successfully!"});

    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Server Error"});
    }
};

module.exports = {submitContactForm};