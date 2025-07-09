// const fs = require("fs");
// const saveDataToFile = (data, pathOfFile) => {
//   const text = JSON.stringify(data, null, 4);
//   fs.writeFileSync(pathOfFile, text, "utf-8");
// };

const fs = require("fs/promises");

const saveDataToFile = async (data, pathOfFile) => {
  const text = JSON.stringify(data, null, 4);
  fs.writeFileSync(pathOfFile, text, "utf-8");
};
module.exports = {
  saveDataToFile,
};
