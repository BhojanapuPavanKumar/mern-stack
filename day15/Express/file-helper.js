// medium (**)
//uuid npm i uuid -->
//JSON.stringify()//convert arr to text
//JSON.parse()//convert text to array
const { v4: uuidv4 } = require("uuid");
const fsPromises = require("fs/promises");

const saveArrayToFile = async (arr, filePath) => {
  try {
    const stringifindArr = JSON.stringify(arr, null, 4);
    await fsPromises.writeFile(filePath, stringifindArr, "utf-8");
  } catch (err) {
    console.log(Object.keys(err));
    //worst and unprepared case case
    console.error("Error reading file", err.message);
    return null;
  }
};

const saveObjectToArrayInFile = async (obj, filePath) => {
  // read the file
  // try to convert it into JS object using JSON.parse()
  // if there is any error --> file is empty
  //                       --> put the object in new empty array
  // else push the object in the parsed array
  // ...
  // then convert the array to JSON and store the file

  const arr = await getAllDataFromArrayFromFile(filePath);
  obj.id = uuidv4();
  arr.push(obj);
  await saveArrayToFile(arr, filePath);
  return obj;
};

// easy (*)
const getAllDataFromArrayFromFile = async (filePath) => {
  // read the file
  // try to convert it into JS object using JSON.parse()
  // if there is any error --> file is empty
  //                       --> return empty array
  // if it is able to parse --> return the parsed array
  try {
    const txt = await fsPromises.readFile(filePath, "utf-8");
    try {
      const data = JSON.parse(txt);
      if (!Array.isArray(data))
        throw new Error("File doesn't contain an array");
      return data;
    } catch (err) {
      console.warn(
        "the file is corrupted or not a valid JSON format. Resetting it!"
      );
      await fsPromises.writeFile(filePath, "[]", "utf-8");
      return [];
    }
  } catch (err) {
    console.log(Object.keys(err));
    if (err.code === "ENOENT") {
      console.warn("creatimg file...");
      await fsPromises.writeFile(filePath, "[]", "utf-8");
      return [];
    }
    //worst and unprepared case case
    console.error("Error reading file", err.message);
    return null;
  }
};

// difficult (****)
const editObjectFromArrayFromFile = async (
  newObjProperties,
  elemid,
  filePath
) => {
  // read the file
  // try to convert it into JS object using JSON.parse()
  // if there is any error --> file is empty
  //                       --> show the error in the console ---> object does not exists
  // if it is able to parse --> get the particular from array using index
  //                        --> change the object as you want
  //                        --> ::save to the file::
  const arr = await getAllDataFromArrayFromFile(filePath);
  const idx = arr.findIndex((elem) => {
    if (elem.id === elemid) return true;
    else return false;
  });
  if (idx === -1) {
    console.error("Invalid Id. No object fouhnd with given Id:");
    return arr;
  }
  const currentObj = arr[idx];
  const newObject = { ...currentObj, ...newObjProperties };
  arr[idx] = newObject;
  await saveArrayToFile(arr, filePath);
};

// difficult (***)
const deleteObjectFromArrayFromFile = async (elemid, filePath) => {
  // read the file
  // try to convert it into JS object using JSON.parse()
  // if there is any error --> file is empty
  //                       --> show the error in the console ---> object does not exists
  // if it is able to parse --> delete the object from the array
  //                        --> ::save the new array to the file::
  const arr = await getAllDataFromArrayFromFile(filePath);
  const idx = arr.findIndex((elem) => elem.id === elemid);
  if (idx === -1) {
    console.error("Invalid Id. No object found with given Id:");
    return arr;
  }
  arr.splice(idx, 1);
  await saveArrayToFile(arr, filePath);
};

module.exports = {
  saveObjectToArrayInFile,
  getAllDataFromArrayFromFile,
  editObjectFromArrayFromFile,
  deleteObjectFromArrayFromFile,
};
