const express = require("express");
const axios = require("axios");
const newsr = express.Router();
const { auth } = require("../middlewares/auth");
require("dotenv").config();

newsr.post("/search", auth, async (req, res) => {
  const search = req.body.search;
  // console.log(req.body.search)

  try {
    const news_api_key = `${process.env.NEWS_API_KEY}`;

    var url = `http://newsapi.org/v2/everything?q=${search}&apiKey=${news_api_key}`;

    const news_get = await axios.get(url);
    res.json({ articles: news_get.data.articles });
  } catch (error) {
    if (error.response) {
      console.log(error);
    }
  }
});

module.exports = newsr;
