// Import necessary dependency and API route
const router = require('express').Router();
const apiRoutes = require('./api');

// Define API route, error handling message and then export
router.use('/api', apiRoutes);

router.use((req, res) => res.send('Oh no! Wrong route!'));

module.exports = router;
