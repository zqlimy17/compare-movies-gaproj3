const express = require("express");
const movie = express.Router();
const Movies = require("../models/Users");

movie.put("/:userId/:movieId", (req, res) => {
  Movies.findByIdAndUpdate(
    { _id: req.params.userId },
    {
      $push: {
        favorites: req.params.movieID
      }
    },
    (err, updatedUser) => {
      if (err) console.log(err.message);
      console.log(`Movie has been added.`);
      res.json(updatedUser);
    }
  );
})

movie.delete("/:user/:deleteMovieId", (req, res) => {
  Movies.findByIdAndUpdate(
    { _id: req.params.userID },
    {
      $pull: {
        favorites: req.params.deleteMovieId
      }
    },
    (err, updatedUser) => {
      if (err) console.log(err.message);
      console.log(`Movie has been deleted.`);
      res.json(updatedUser);
    }
  );
});

module.exports = movie;
