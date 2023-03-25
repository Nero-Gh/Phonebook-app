require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./server/config/db");

const app = express();
const port = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
