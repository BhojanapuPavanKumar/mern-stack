const fs = require("node:fs");
console.log("--------start---------");
// const response = fs.readFileSync("./temp.txt");// it returns hexa and binary form

fs.readFile("./temp.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error reading file:", err.message);
    return;
  }
  console.log("temp.txt-->", data);
});

console.log("----------mid------------");
fs.readFile("./student.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error reading file:", err.message);
    return;
  }
  console.log("temp.txt-->", data);
});
console.log("-------END------------");
