require("dotenv").config();
const bodyParser = require('body-parser')
const express = require("express");
const path = require("path");
const cors = require('cors')
const app = express();

app.use(cors())

app.use(bodyParser.json())

app.use("/", express.static(path.join(__dirname, "./dist")));

app.get("/*", (_req, res) => {
  res.sendFile(path.join(__dirname, "./dist", "index.html"));
})

app.listen(4000, () => console.log("Server is running"));
