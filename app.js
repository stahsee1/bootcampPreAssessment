const express = require("express");
const app = express();

const apiRoutes = require('./src/api');

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.get("/health", (req, res) => {
  res.status(200).send("Don't panic.");
});

app.use('/api', apiRoutes);

module.exports = app;
