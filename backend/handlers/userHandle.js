const User = require("../user");

async function addUser(userModel) {
  console.log(userModel);
  let user = new User({
    ...userModel,
  });
  await user.save();
  return user.toObject();
}
async function getUsers() {
  const users = await User.find();
  return users.map((x) => x.toObject());
}
async function getUser(id) {
  const user = await User.findById(id);
  return user.toObject();
}
module.exports = { addUser, getUsers, getUser };
