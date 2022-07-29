const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const blog = require("./model/user");
require("dotenv/config");
const app = express();
app.use(cors());
app.use(express.json());

app.use("/", async (req, res) => {
  const tank = new blog({
    title: req.body.title,
    body: req.body.body,
  });
  await tank
    .save()
    .then(() => {
      console.log("added successfully");
      res.send("added successfully");
    })
    .catch((err) => console.log(err.message));
});

mongoose.connect(process.env.MONGODB_URI, () => {
  console.log("connected to mongodb");
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on PORT : ${process.env.PORT}`);
});
