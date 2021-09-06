const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const db = require("./config/config").get(process.env.NODE_ENV);
const morgan = require("morgan");
const routes = require("./routes/index");

const app = express();
// app use
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

// database connection
mongoose.Promise = global.Promise;
mongoose.connect(
  db.DATABASE,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err) {
    if (err) console.log(err);
    console.log("database is connected");
  }
);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`app is running on http://localhost:${PORT}`);
});

app.get('/', (_req, res) => {
 res.status(OK).send("Hii Isha!")
});

app.use("/api/v1", routes);

module.exports = app;
