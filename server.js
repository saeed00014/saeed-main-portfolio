const express = require("express");
const path = require("path");
const cors = require('cors')

const app = express();

app.use(cors())

app.use("/", express.static(path.join(__dirname, "./dist")));

app.get("/*", (_req, res) => {
  res.sendFile(path.join(__dirname, "./dist", "index.html"));
})

const PORT = 4000
app.listen(PORT, () => {
  console.log(`> Local: \x1b[36mhttp://localhost:\x1b[1m${PORT}/\x1b[0m`);
});