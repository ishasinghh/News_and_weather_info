const User = require("../models/user");

//this will authenticate that wihout login you can't access apies
let auth = (req, res, next) => {
  let token = req.cookies.auth;
  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user)
      return res.json({
        error: true,
        message: "Please login first"
      });

    req.token = token;
    req.user = user;
    next();
  });
};

module.exports = {auth};
