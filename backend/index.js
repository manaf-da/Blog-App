const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
dotenv = require("dotenv").config;

app.listen(PORT, () => console.log(` app listening on port ${PORT}!`));
