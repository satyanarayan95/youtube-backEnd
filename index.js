const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ytRoutes = require('./router')

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://satyanarayan:satya5495@cluster0.a5bhy.mongodb.net/youtubeDB?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((err) => {
    console.log("error", err);
  });

  app.use(ytRoutes)

app.get("/", (req, res) => {
  res.send("hello World");
});

app.listen(5000, () => {
  console.log("server connected to 5000");
});
