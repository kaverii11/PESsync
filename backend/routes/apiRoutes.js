const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');

// Use user routes for `/api/users`
router.use('/users', userRoutes);

module.exports = router;
