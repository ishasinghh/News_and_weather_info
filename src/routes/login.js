const express = require("express");
const User = require("../models/user");

const app = express.Router();

// login user
app.post("/login", function (req, res) {

  if (!req.body.email || !req.body.password)
  return res.status(400).json({
    message: "Enter email and password to login",
  });
  let token = req.cookies.auth;
  User.findByToken(token, (err, user) => {
    if (err) return res(err);
    // if (user)
    //   return res.status(400).json({
    //     error: true,
    //     message: "You are already logged in",
    //   });
    else {
      User.findOne({ email: req.body.email }, function (err, user) {
        if (!user)
          return res.json({
            isAuth: false,
            message: " Auth failed ,email not found",
          });

        user.comparepassword(req.body.password, (err, isMatch) => {
          if (!isMatch)
            return res.json({
              isAuth: false,
              message: "password doesn't match",
            });

          user.generateToken((err, user) => {
            if (err) return res.status(400).send(err);
            res.cookie("auth", user.token).json({
              isAuth: true,
              id: user._id,
              email: user.email,
              token: user.token,
            });
          });
        });
      });
    }
  });
});

module.exports = app;
