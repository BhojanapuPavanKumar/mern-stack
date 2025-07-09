const { cFetch } = require("./network-helper.js");
const { saveDataTofILE } = require("./file-helper-sync.js");
const getRecipies = async () => {
  try {
    console.time("getRecipies");
    const response = await cFetch("https://dummyjson.com/recipes");
    const data = await response.json();
    console.log("total recipes --->", data.total);
    console.timeEnd("getRecipies");
  } catch (err) {
    console.log("recipes are unble to fetch", err.message);
  }
};
const getProducts = async () => {
  try {
    console.time("getProducts");
    const response = await cFetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log("total recipes --->", data.total);
    console.timeEnd("getProducts");
  } catch (err) {
    console.log("products are unble to fetch", err.message);
  }
};

console.time("GEC");

getRecipies();
getProducts();

console.timeEnd("GEC");
