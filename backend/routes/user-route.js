const express = require("express");
const router = express.Router();
const {addUser,getUsers,getUser} = require("../handlers/userHandle");

router.post("/addUser", async (req, res) => {
  console.log(req.body);
  let user = await addUser(req.body);
  res.send(user);
});

router.get("/getUsers", async (req, res) => {
  let users = await getUsers();
  res.send(users);
});

router.get("/getUser/:id", async (req, res) => {
  let users = await getUser(req.params[id]);
  res.send(users);
});

module.exports = router;