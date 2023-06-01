import express from "express";
const app = express();
const port = process.env.port || 3000;
app.get("/", (req, res) => {
  console.log(`we are on home page`);
  res.send("You have clicked on home page");
});

app.get("/contact", (req, res) => {
  console.log(`we are on contact page`);
  res.send("You have clicked on contact page");
});

app.get("/services", (req, res) => {
  console.log(`we are on services page`);
  res.send("You have clicked on services page");
});

app.get("/updates", (req, res) => {
  console.log(`we are on updates page`);
  res.send("You have clicked on updates page");
});

app.get("/docs", (req, res) => {
  console.log(`we are on  Documentation page`);
  res.send("You have clicked on Documentation page");
});

app.listen(port, (req, res) => {
  console.log(`The server is running at the port http://localhost:${port}`);
});
