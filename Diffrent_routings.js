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
//Creating an String path
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

app.get("*", (req, res) => {
  console.log(`Not found`);
  res.send("Page not found!");
});
//Creating an Api for tab
app.get("/Api/*", (req, res) => {
  console.log(`This is Api `);
  res.send("This is API page");
});

//Creating string pattern used only when we have to create same response for two different paths
app.get("/ab?cd", (req, res) => {
  console.log(`String pattern`);
  res.send(
    "This route will be executed only when a client hit acd or abcd(Based on string pattern)"
  );
  
  //Creating regular expression pattern \
app.get(/z/, (req, res) => {
  console.log(`regular expression`);
  res.send("This route will be executed when a string will contain z init");
});
app.listen(port, (req, res) => {
  console.log(`The server is running at the port http://localhost:${port}`);
});
