// Import Mongoose dependency
const { connect, connection } = require('mongoose');
// Setup local connection to MongoDB and connect
const connectionString = 'mongodb://127.0.0.1:27017/socialNetworkDB';

connect(connectionString);
// Export module
module.exports = connection;
