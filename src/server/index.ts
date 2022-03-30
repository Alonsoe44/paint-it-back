require("dotenv").config();
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

module.exports = app;
