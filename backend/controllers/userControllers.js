//userController.js
const User = require('../models/User');

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users' });
  }
};

// Add a new user
const addUser = async (req, res) => {
  const { username, email, phone, gender, password } = req.body;

  try {
    const newUser = new User({ username, email, phone, gender, password });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Error adding user' });
  }
};

module.exports = {
  getUsers,
  addUser,
};
