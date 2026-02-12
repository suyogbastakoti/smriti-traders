const express = require("express");

//Creates a mini “route manager”
const router = express.Router(); 

const {submitContactForm} = require("../controllers/contactController");

// POST /api/contact

router.post("/", submitContactForm);

module.exports = router;