const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");
const app = express();

require("dotenv").config();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

app.listen(PORT, (req, res) => {
  console.log(`connected to port ${PORT}`);
});

app.use("/api", require("./routes/routes"));

mongoose.connect(process.env.MONGOOSECLUSTER);
