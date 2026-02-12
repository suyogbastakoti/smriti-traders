const express = require("express");
const cors = require("cors"); //CORS allows your React frontend (port 3000/5173) to talk to your backend (port 5000)
require("dotenv").config();

//importing the function that connects to MongoDB.
const connectDB = require("./config/db");

//creates your backend application
const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors()); //allows frontend to send requests.
app.use(express.json()); //allows server to understand json data.

const contactRoutes = require("./routes/contactRoutes");
app.use("/api/contact", contactRoutes);


//test route
app.get("/", (req, res) => {
  res.send("Smriti Traders Backend Running");
});

const PORT = process.env.PORT || 5000;

//Start listening for requests.
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
