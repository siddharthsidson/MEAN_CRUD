const express = require("express");
const app = express();

const mongoose = require("mongoose");

app.use(express.json());
require("dotenv").config();
const uri = process.env.URI;
const port = process.env.PORT;
const userRoutes = require("./routes/user-route");
const cors = require('cors');
app.use(cors());
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
