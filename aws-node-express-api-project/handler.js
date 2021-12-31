const serverless = require("serverless-http");
const express = require("express");
const app = express();
const ejs = require("ejs");


app.set("view engine", "ejs");
// Setting up ejs
app.use(express.static('public'));

// ==============  Main Page      ============================
const pageRouter = require('./routes/main/PageRoutes')
app.use('/',pageRouter)

// app.get("/", (req, res, next) => {
//   return res.render('index')
// });

app.get("/hello", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from aman!",
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});


module.exports.handler = serverless(app);
