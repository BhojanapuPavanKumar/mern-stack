//Success: 200, 201, 204
//Redirection: Permanent redirection,temporary redirection
//Client Mistake: 400,401,403,404
//server: 500,502
const express = require("express");
const {
  getAllDataFromArrayFromFile,
  saveObjectToArrayInFile,
} = require("./file-helper");

const app = express();
app.use(express.json()); // it tells the express server to read the incomming request body in json format

const filePath = "./local_db.json";
app.get("/app/v1/students/", async (req, res) => {
  const studentArr = await getAllDataFromArrayFromFile(filePath);
  res.json({
    isSuccess: true,
    message: "Students list fetching",
    data: studentArr,
  });
});

app.post("/app/v1/students", async (req, res) => {
  try {
    const data = req.body;
    const newObj = await saveObjectToArrayInFile(data, filePath);
    res.status(201);
    res.json({
      isSuccess: true,
      message: "Student added successfully",
      data: newObj,
    });
  } catch (err) {
    res.status(500);
    res.json({
      isSuccess: false,
      message: "Something went wrong",
      data: {},
    });
  }
});

app.patch("/app/v1/students/:studentId", async (req, res) => {
  try {
    const { studentId } = req.params;
    console.log(studentId);
  } catch (err) {
    res.status(500);
    res.json({
      isSuccess: false,
      message: "Something went wrong",
      data: {},
    });
  }
});

//app.put
//app.delete
const fs = require("fs").promises;

// PUT: Full update of a student
app.put("/app/v1/students/:studentId", async (req, res) => {
  try {
    const { studentId } = req.params;
    const newStudentData = req.body;

    const studentArr = await getAllDataFromArrayFromFile(filePath);
    const index = studentArr.findIndex((stu) => stu.id === studentId);

    if (index === -1) {
      return res.status(404).json({
        isSuccess: false,
        message: "Student not found",
        data: {},
      });
    }

    // Replace old data with new one
    studentArr[index] = { ...newStudentData, id: studentId };

    await fs.writeFile(filePath, JSON.stringify(studentArr, null, 2));

    res.json({
      isSuccess: true,
      message: "Student updated successfully",
      data: studentArr[index],
    });
  } catch (err) {
    res.status(500).json({
      isSuccess: false,
      message: "Something went wrong",
      data: {},
    });
  }
});

// DELETE: Remove a student by ID
app.delete("/app/v1/students/:studentId", async (req, res) => {
  try {
    const { studentId } = req.params;

    const studentArr = await getAllDataFromArrayFromFile(filePath);
    const index = studentArr.findIndex((stu) => stu.id === studentId);

    if (index === -1) {
      return res.status(404).json({
        isSuccess: false,
        message: "Student not found",
        data: {},
      });
    }

    const removedStudent = studentArr.splice(index, 1)[0];

    await fs.writeFile(filePath, JSON.stringify(studentArr, null, 2));

    res.status(204).json(); // No Content
  } catch (err) {
    res.status(500).json({
      isSuccess: false,
      message: "Something went wrong",
      data: {},
    });
  }
});

app.get("/app/v1/products", (req, res) => {
  res.json({
    isSuccess: true,
    message: "Products list fetching",
    data: [{ title: "Mixer grinder", price: 2000 }],
  });
});

app.listen(2700, () => {
  console.log("------Server is running---------");
});
