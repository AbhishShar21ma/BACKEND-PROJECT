const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("This is first hello world program");
});
app.listen(port, () => {
  console.log(`Your server is running at the port http://localhost:${port}`);
});
