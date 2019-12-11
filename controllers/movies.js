const express = require("express");
const router = express.Router();
//Todo: Bring in User model
// add movie to user route
// GET route /:user/:movie
// example /movies/kjKJHKJHkhkgggk/Hhkjhkhhkjhkjlkj
// User.findByIdAndUpdate

const Movies = require("../models/Users");

// Seeds Data
router.get("/seed", async (req, res) => {
  const newMovies = [
    {
      name: "",
      favorites: [
        {
          type: String
        }
      ]
    }
  ];

  try {
    const seedItems = await Bookmarks.create(newBookmarks);
    res.send(seedItems);
  } catch (err) {
    res.send(err.message);
  }
});

// Update User - add movie
router.put("/:userID/:movieID", (req, res) => {
  Movies.findByIdAndUpdate(
    { /*Find logged in user*/ _id: req.params.userID },

    { $push: { favorites: MovieID } },
   
    (err, foundMovie) => {
      res.json(foundMovie);
    }
  );
})


// UPdate User - delete movie
router.delete("/:user/:deleteMovieID", (req, res) => {
  Movies.findByIdAndUpdate(
    { /*Find logged in user*/ _id: req.params.userID },

    //pulling/splicing the ID of movie into User array*
     { $pullAll: {favorites: [req.params.deleteMovieID] } } ,

    (err, foundMovie) => {
      res.json(createdMovie);
    }
  );
  });


module.exports = router;
