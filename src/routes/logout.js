const express = require('express');
const { auth } = require("../middlewares/auth");

const app = express.Router();

app.get("/logout", auth, function (req, res) {
    req.user.deleteToken(req.token, (err, user) => {
      if (err) return res.status(400).send(err);
      res.sendStatus(200);
    });
  });

  module.exports = app;