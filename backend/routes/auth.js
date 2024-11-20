const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User'); // Import User model
const router = express.Router();

// Signup route
router.post('/signup', async (req, res) => {
  const { username, email, phone, gender, password } = req.body;

  try {
    // Check for existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: 'User with this email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ username, email, phone, gender, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    console.error('Error registering user:', error.message);
    res.status(500).json({ error: 'Error registering user', details: error.message });
  }
});

module.exports = router;
