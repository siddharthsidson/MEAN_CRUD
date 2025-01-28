const User = require("../user");

async function addUser(userModel){
    let user = new User(
        ...userModel
    )
    await user.save();
    return user.toObject();
}
async function getUsers(){
    const users = await User.find();
    return users.map(x=>x.toObject());
}
module.exports = {addUser,getUsers};