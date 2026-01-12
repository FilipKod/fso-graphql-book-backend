const mongoose = require("mongoose");

const server = require("./server");

require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((error) => {
    console.log("connection to mongodb failed:", error.message);
  });

server(4000);
