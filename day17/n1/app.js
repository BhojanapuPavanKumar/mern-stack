require("dotenv").config();

const express = require("express");
require("./config/db.js");

const { apiRouter } = require("./api/v1/routes");

const app = express();
app.use(express.json()); // it is important to read the req.body format in the json body

const cors = require("cors");
app.use(cors()); // <--- Add this before your routes

app.use((req, res, next) => {
  console.log("------------");
  console.log(new Date(), req.method, req.url); //2025-07-08T04:35:44.663Z GET /hello
  console.log("-----------");
  next();
});

app.use("/api/v1", apiRouter);

app.listen(2900, () => {
  console.log("-----Server is running -------");
});
