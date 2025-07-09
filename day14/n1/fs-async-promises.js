const fsPromises = require("node:fs/promises");

const main = async () => {
  console.log("--------start---------");
  // const response = fs.readFileSync("./temp.txt");// it returns hexa and binary form
  try {
    const response = await fsPromises.readFile("./temp.txt", "utf-8");
    console.log(response);
  } catch (e) {
    console.log("Cannot open file temp.txt --->", e.message);
  }

  console.log("----------mid------------");
  try {
    const response2 = await fsPromises.readFile("./student.txt", "utf-8");
    console.log(response2);
  } catch (e) {
    console.log("Cannot open file student.txt --->", e.message);
  }
  console.log("-------END------------");
};
// const response = fs.readFileSync("./temp.txt");// it returns hexa and binary form
main();
