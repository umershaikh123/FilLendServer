/** @format */

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3001");
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Origin",
    "http://localhost:3001/Lender/0x8a770B7700f941Bb2E6Dd023AD3B22c2c41C5901"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

let dataArray = [];

app.post("/", (req, res) => {
  console.log(req.body);
  dataArray.push(req.body);
});

app.get("/", (req, res) => {
  res.json(dataArray);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
