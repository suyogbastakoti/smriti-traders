const Contact = require("../models/contact");
const nodemailer = require("nodemailer");

const submitContactForm = async (req, res) => {
  try {
    const { name, phone, message } = req.body;

    // Simple validation
    if (!name || !phone || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create and save contact in MongoDB
    const contact = new Contact({ name, phone, message });
    await contact.save();

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465, // SSL
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Gmail App Password
      },
    });

    // Send email (wrapped in try/catch so it can't block response)
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // You receive it yourself
        subject: "New Contact Message - Smriti Traders",
        text: `Name: ${name}\nPhone: ${phone}\nMessage: ${message}`,
      });
    } catch (emailError) {
      console.error("Email failed:", emailError);
      // Continue — don't throw
    }

    // Always respond to frontend
    res.status(201).json({ message: "Message saved successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { submitContactForm };
