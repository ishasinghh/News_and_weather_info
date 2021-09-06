const express = require("express");
const axios = require("axios");
const newsr = express.Router();
const { auth } = require("../middlewares/auth");
require("dotenv").config();

newsr.get("/news", auth, async (_req, res) => {
  try {
    const news_api_key = `${process.env.NEWS_API_KEY}`;

    const url = `http://newsapi.org/v2/top-headlines?country=in&apiKey=${news_api_key}`;

    const news_get = await axios.get(url);
    res.json({ articles: news_get.data.articles });
  } catch (error) {
    if (error.response) {
      console.log(error);
    }
  }
});

module.exports = newsr;
