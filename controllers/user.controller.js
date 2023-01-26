const User = require("../models/user.model.js");

const registerUser = async (req, res) => {
  const user = await User.create(req.body);
  return res.status(201).json({
    success: true,
    message: "Account created successfully",
    user: user,
  });
};
const getAllUser = async (req, res) => {
  const users = await User.find({});
  return res.status(200).json({
    success: true,
    users: users,
  });
};

module.exports = { registerUser, getAllUser };
