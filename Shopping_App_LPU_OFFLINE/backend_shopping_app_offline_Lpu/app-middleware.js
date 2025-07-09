require("dotenv").config();

const express = require("express");

const app = express();

app.use(express.json()); // it is important to read the req.body format in the json body

app.use((req, res, next) => {
  console.log("------------");
  console.log(new Date(), req.method, req.url); //2025-07-08T04:35:44.663Z GET /hello
  console.log("-----------");
  next();
});

app.get("/", (req, res) => {
  res.status(200).json({
    isSuccess: true,
    message: "Server is Running",
    data: {},
  });
});

app.get("/hello", (req, res) => {
  res.status(200).json({
    isSuccess: true,
    message: "hello server ",
    data: {},
  });
});

app.use((req, res, next) => {
  console.log("!!!!!!!!!!!");
  res.json({
    isSuccess: false,
    message: "Route doesn't match",
  });
});

app.listen(2900, () => {
  console.log("-----Server is running -------");
});
