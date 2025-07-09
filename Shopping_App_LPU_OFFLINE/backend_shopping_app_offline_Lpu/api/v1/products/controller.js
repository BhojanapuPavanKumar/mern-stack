const { Product } = require("../../../models/product_schema.js");

const createProductController = async (req, res) => {
  try {
    const data = req.body;
    console.log("creating product...");
    let newProduct = null;
    Object.keys(data).forEach((key) => {
      if (data[key] == null || data[key] == "") delete data.key;
    });
    try {
      newProduct = await Product.create(data);
    } catch (err) {
      console.log("----Error while creating Product ", err.messsage);
      res.status(400).json({
        isSuccess: false,
        messsage: `Err ${err.messsage}`,
        data: {},
      });
    }
    res.status(201).json({
      isSuccess: true,
      messsage: `Product created`,
      data: {
        product: newProduct,
      },
    });
  } catch (err) {
    if (err.name === "ValidationError" || err.code == "11000") {
      res
        .status(400)
        .json({ isSuccess: false, message: `Err: ${err.message}`, data: {} });
    }
    console.log("🔴 Error in createProductController");
    res
      .status(501)
      .json({ isSuccess: false, message: "Internal Server Error", data: {} });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.status(200).json({
      isSuccess: true,
      message: "Product list fetched",
      data: {
        products: allProducts,
      },
    });
  } catch (err) {
    console.log("🔴 Error in createProductController");
    res
      .status(501)
      .json({ isSuccess: false, message: "Internal Server Error", data: {} });
  }
};

const updateProductController = async (req, res) => {
  try {
    const { productId } = req.params;
    const data = req.body;
    const updateItem = await Product.findByIdAndUpdate(productId, data, {
      new: true, // return the updated document
      runValidators: true, // validate against schema
    });

    if (!updateItem) {
      return res.status(404).json({
        isSuccess: false,
        message: "Product not found",
        data: {},
      });
    }
    res.status(200).json({
      isSuccess: true,
      message: "Product updated successfully",
      data: {
        product: updateItem,
      },
    });
  } catch (err) {
    console.log("🔴 Error in updateProductController");
    res
      .status(500)
      .json({ isSuccess: false, message: "Internal Server Error", data: {} });
  }
};

const deleteProductController = async (req, res) => {
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
};

module.exports = {
  createProductController,
  getAllProducts,
  updateProductController,
  deleteProductController,
};
