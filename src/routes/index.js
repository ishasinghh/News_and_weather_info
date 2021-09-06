const express = require("express");
const registerApi = require("./register");
const loginApi = require("./login");
const logoutApi = require("./logout");
const getProfile = require("./getProfile");
const newsApi = require("./fetchNews");
const searchNewsApi = require("./serachNews");
const weatherApi = require("./weatherForcast");

const router = express.Router();

router.use(registerApi);
router.use(loginApi);
router.use(logoutApi);
router.use(getProfile);
router.use(newsApi);
router.use(searchNewsApi);
router.use(weatherApi);

module.exports = router;
