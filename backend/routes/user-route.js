const express = require("express");
const router = express.Router();
const {
  addUser,
  getUsers,
  deleteUser,
  updateUser,
} = require("../handlers/userHandle");

router.post("/addUser", async (req, res) => {
  console.log(req.body);
  let user = await addUser(req.body);
  res.send(user);
});

router.put("/updateUser/:id", async (req, res) => {
  await updateUser(req.params["id"], req.body);
  res.send();
});

router.get("/getUsers", async (req, res) => {
  let users = await getUsers(req.params["id"]);
  res.send(users);
});

router.delete("/deleteUser/:id", async (req, res) => {
  await deleteUser(req.params["id"]);
  res.send();
});

module.exports = router;
