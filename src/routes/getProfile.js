const express = require('express');
const { auth } = require("../middlewares/auth");

const app =  express.Router();

// get logged in user
app.get("/profile", auth, function (req, res) {
    res.json({
      isAuth: true,
      id: req.user._id,
      email: req.user.email,
      name: req.user.firstName +" "+ req.user.lastName,
    });
  });

  module.exports = app;