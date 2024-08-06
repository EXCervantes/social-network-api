// Import necessary dependency and routes
const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');

// Define the routes and then export
router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router;
