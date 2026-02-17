const Contact = require("../models/contact");

const submitContactForm = async (req, res) => {
  try {
    const { name, phone, message } = req.body;

    if (!name || !phone || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const contact = new Contact({ name, phone, message });
    await contact.save();

    res.status(201).json({ message: "Message saved successfully!" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { submitContactForm };
