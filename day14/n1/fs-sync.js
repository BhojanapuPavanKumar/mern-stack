const fs = require("node:fs");
console.log("--------start---------");
// const response = fs.readFileSync("./temp.txt");// it returns hexa and binary form

const response = fs.readFileSync("./temp.txt", "utf-8");

console.log(response);

console.log("----------mid------------");
const response2 = fs.readFileSync("./student.txt", "utf-8");
console.log(response2);
console.log("-------END------------");
