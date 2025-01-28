const express = require("express");
const router = express.Router();
const {addUser,getUsers} = require("../handlers/userHandle")
router.post("/addUser", async (req, res) => {
  await addUser(req.body);
  res.send("done!");
});

router.get("/getUsers", async (req, res) => {
  let users = await getUsers();
  res.send(users);
});

module.exports = router;