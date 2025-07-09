const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_DB_URL, {
    dbName: "Day17",
  })
  .then(() => {
    console.log("--------✅✅ DB connected --------");
  })
  .catch((err) => {
    console.log("-----------❌❌ X DB connection error-------------");
    console.log(err.message);
  });
