// Import necessary dependencies
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const cwd = process.cwd();

// Define PORT and Express dependency
const PORT = process.env.PORT || 3001;
const app = express();

// Initialize middleware and routes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Establish connection with the database and print current PORT in use
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for Social Network running on port ${PORT}!`);
  });
});
