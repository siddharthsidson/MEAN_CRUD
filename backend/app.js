const express = require("express");
const app = express();

const mongoose = require("mongoose");
require("dotenv").config();
const uri = process.env.URI;
const port = process.env.PORT;
const userRoutes = require("./routes/user-route");
connectDB().catch((err) => console.log(err));

async function connectDB() {
  await mongoose.connect(uri, {
    dbName: "UsersDb",
  });
}

app.get("/", (req, res) => {
  res.send("App Running");
});

app.use(userRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
