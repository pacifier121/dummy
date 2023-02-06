const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 9000;

// Connecting to database
mongoose.set('strictQuery', false);

const connectDB = async() => {
    mongoose.connect(process.env.MONGO_URL, 
      { useNewUrlParser: true, useUnifiedTopology: true }
      , () => {
        console.log("Connected to MongoDB")
      });
}


app.get("/", (req, res) => {
    res.send("<h1>Welcome to this site</h1>");
})

connectDB.then(() => {
    app.listen(PORT, () => {
        console.log("Server up and running on PORT " + PORT);
    })
})