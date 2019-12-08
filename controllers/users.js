const express = require("express");
const User = require("../models/Users");
const users = express.Router();
const bcryptjs = require("bcryptjs");

// users.get("/", (req, res) => {
//   res.render("../views/users/sign-up.ejs", {
//     currentUser: req.session.currentUser
//   });
// });

// users.get("/:username", (req, res) => {
//   User.findOne({ username: req.params.username }, (err, user) => {
//     try {
//       Review.find({ reviewer: user._id })
//         .populate("book")
//         .exec((errr, reviews) => {
//           if (errr) console.log(errr.message);
//           res.render("../views/users/userprofile.ejs", {
//             currentUser: req.session.currentUser,
//             reviews,
//             profile: user
//           });
//         });
//     } catch (err) {
//       res.render("../views/err/404.ejs", {
//         currentUser: req.session.currentUser
//       });
//     }
//   });
// });

// users.get("/profile/:username/edit", (req, res) => {
//   res.render("../views/users/editprofile.ejs", {
//     currentUser: req.session.currentUser
//   });
// });

// users.post("/", (req, res) => {
//   req.body.password = bcrypt.hashSync(
//     req.body.password,
//     bcrypt.genSaltSync(10)
//   );
//   User.create(
//     {
//       name: req.body.name,
//       username: req.body.username,
//       password: req.body.password,
//       favorites: 0
//     },
//     (err, createdUser) => {
//       if (err) console.log(err.message);
//       res.redirect("/sessions/login");
//     }
//   );
// });

// users.put("/:id/edit", (req, res) => {
//   User.findByIdAndUpdate(
//     { _id: req.params.id },
//     { name: req.body.name },
//     (err, foundUser) => {
//       res.redirect("/users/profile/" + req.session.currentUser.username);
//     }
//   );
// });

module.exports = users;
