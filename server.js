// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const app = express();

// Environment Variables (getting ready for Heroku)
const PORT = process.env.PORT || 5000;

// Middleware
const usersControllers = require("./controllers/users");
app.use("/users", usersControllers);
app.use(express.json()); //use .json(), not .urlencoded()
app.use(express.static("public"));

app.use(
  session({
    secret: "D1D18649F8AB8807F0868CCEED680F547C2A233AFBDF99686ACC12297150330E", //a random string do not copy this value or your stuff will get hacked
    resave: false,
    saveUninitialized: false
  })
);

// Routes
const db = mongoose.connection;

// Environment Variables
const mongoURI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/comparison-movie-db";

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true }, () =>
  console.log("MongoDB connection established:", mongoURI)
);

// Error / Disconnection
db.on("error", err => console.log(err.message + " is Mongod not running?"));
db.on("disconnected", () => console.log("mongo disconnected"));

app.get("/*", (req, res) => {
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log("Let's get things done on port", PORT);
});
