const dotEnv = require("dotenv");
dotEnv.config();

const express = require("express");

const { Product } = require("./models/product_schema.js");

require("./config/db.js");

const app = express();

const cors = require("cors");
app.use(cors()); // <--- Add this before your routes

app.use(express.json()); // it is important to read the req.body format in the json body
app.get("/", (req, res) => {
  res.status(200).json({
    isSuccess: true,
    message: "Products fetched",
    data: {},
  });
});

app.get("/api/v1/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      isSuccess: true,
      message: "Products fetched",
      data: { products },
    });
  } catch (err) {
    res.status(500).json({
      isSuccess: false,
      message: "Fetch failed",
      data: { errMessage: err.message },
    });
  }
});

app.post("/api/v1/products", async (req, res) => {
  try {
    const body = req.body;
    const newProduct = await Product.create(body);
    res.status(201).json({
      isSuccess: true,
      message: err.message,
      data: {
        product: newProduct,
      },
    });
  } catch (err) {
    console.log(
      "-----❌❌ error occured at POST products ❌❌-----",
      err.message
    );

    if (err.name === "ValidationError" || err.code == "11000") {
      res.status(400).json({
        isSuccess: false,
        message: err.message,
        data: {},
      });
    } else {
      res.status(500).json({
        isSuccess: false,
        message: "Internal Server Error",
        data: {
          errMessage: err.message,
        },
      });
    }
  }
});

app.delete("/api/v1/products/:productId", async (req, res) => {
  try {
    const { productId } = req.params;
    const deletedItem = await Product.findByIdAndDelete(productId);

    if (!deletedItem) {
      return res.status(404).json({
        isSuccess: false,
        message: "Product not found",
        data: {},
      });
    }

    res.status(204).json({
      isSuccess: true,
      message: "Product Deleted",
      data: {
        product: deletedItem,
      },
    });
  } catch (err) {
    res.status(500).json({
      isSuccess: false,
      message: "Internal Server Error",
      data: {
        errMessage: err.message,
      },
    });
  }
});

app.listen(2900, () => {
  console.log("------- Server started --------");
});
