require("dotenv").config();
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const cors = require('cors')
const app = express();

const router = require("./backend/route/product");

app.use(cors())

app.use(bodyParser.json())

app.use('/products', router);

app.use("/", express.static(path.join(__dirname, "./dist")));

app.get("/*", (_req, res) => {
  res.sendFile(path.join(__dirname, "./dist", "index.html"));
})

app.listen(4000, () => console.log("Server is running"));

mongoose.connect(
  'mongodb+srv://saeed00014:amiralim890@cluster0.79q6syx.mongodb.net/?retryWrites=true&w=majority',
  {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      writeConcern: { w: 'majority' },
  }
);
