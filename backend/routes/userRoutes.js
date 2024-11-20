const express = require('express');
const User = require('../models/User');

const router = express.Router();

// Sign-up route
router.post('/signup', async (req, res) => {
  const { username, email, phone, gender, password } = req.body;

  try {
    // Check for existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: 'User with this email already exists' });
    }

    // Create and save the new user
    const newUser = new User({ username, email, phone, gender, password });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    res.status(400).json({ error: 'Error registering user', details: error.message });
  }
});

module.exports = router;
