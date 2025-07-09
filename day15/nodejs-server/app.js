//RESTAPIS
//HTTP methods: GET,POST,PUT,PATCH,DELETE
//patch :> to update the partial information
//put :> To replace the current item with new item
//post :> create new item
//get :> IDEMPOTENT should change anything in the DB
//delete :> delete an item from DB

// paths: should have resources as noun and in plural form

// GET /api/v1/products
// POST /api/vi/products
// Delete /api/vi/products
// PUT /api/vi/products

//communication should happen in JSON (as long as possible)
// reinventing the wheel in js

//npm i nodemon -g
//npm i express
const http = require("http");

const app = http.createServer((req, res) => {
  console.log("---------req recieved---------", req.url);
  res.setHeader("Content-type", "application/json");
  if (req.method === "GET") {
    switch (req.url) {
      case "/api/v1/students": {
        const obj = {
          isSuccess: true,
          message: "Students list fetched successfully",
          data: { title: "Surya", city: "Punjab" },
        };
        res.end(JSON.stringify(obj, null, 4));
        break;
      }
      case "/api/v1/products": {
        const obj = {
          isSuccess: true,
          messsage: "Product list fetched successfully",
          data: { title: "Mixer grinder", price: 2000 },
        };
        res.end(JSON.stringify(obj, null, 4));
        break;
      }
      default: {
        res.end(
          JSON.stringify({
            isSuccess: false,
            message: "Invalid API endpoint",
          })
        );
      }
    }
  } else {
    console.log(Object.keys(req)); //Object.values
    res.end("work in progress...");
  }
});

app.listen(2700, () => {
  console.log("------------server is running-------------");
});
