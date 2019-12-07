// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Environment Variables (getting ready for Heroku)
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); //use .json(), not .urlencoded()
app.use(express.static('public'));

// Routes
const db = mongoose.connection;

// Environment Variables
const mongoURI =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/comparison-movie-db';

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true }, () =>
  console.log('MongoDB connection established:', mongoURI)
);

// Error / Disconnection
db.on('error', err => console.log(err.message + ' is Mongod not running?'));
db.on('disconnected', () => console.log('mongo disconnected'));

app.listen(PORT, () => {
  console.log("Let's get things done on port", PORT);
});
