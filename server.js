const express = require("express");
const path = require("path");
const app = express();
const cors = require('cors')

app.use(cors())

app.use("/", express.static(path.join(__dirname, "./dist")));
app.get("/api/v1", (req, res) => {
  res.json({
    project: "React and Express Boilerplate",
    from: "Vanaldito",
  });
});
app.get("/*", (_req, res) => {
  res.sendFile(path.join(__dirname, "./dist", "index.html"));
})
const PORT = 4000
app.listen(PORT, () => {
  console.log();
  console.log(`  App running in port ${PORT}`);
  console.log();
  console.log(`  > Local: \x1b[36mhttp://localhost:\x1b[1m${PORT}/\x1b[0m`);
});