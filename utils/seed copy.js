const connection = require('../config/connection');
const { User, Thought } = require('../models');
// const {
//   getRandomName,
//   getRandomComments,
//   getRandomPost,
//   genRandomIndex,
// } = require('./data');

// Start the seeding runtime timer
console.time('seeding');

// Creates a connection to mongodb
connection.once('open', async () => {
  // Delete the collections if they exist
  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }

  let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection('thoughts');
  }

  // Empty arrays for randomly generated posts and comments
  const users = [];
  const thoughts = [];

  // Makes comments array
  for (let i = 0; i < usernames.length; i++) {
    const userData = {
      username: usernames[i],
      email: email[i],
    };
  }
  const makePost = (text) => {
    posts.push({
      text,
      username: getRandomName().split(' ')[0],
      comments: [comments[genRandomIndex(comments)]._id],
    });
  };

  // Wait for the comments to be inserted into the database
  await Comment.insertMany(comments);

  // For each of the comments that exist, make a random post of 10 words
  comments.forEach(() => makePost(getRandomPost(10)));

  // Wait for the posts array to be inserted into the database
  await User.insertMany(users);

  // Log out a pretty table for comments and posts
  console.table(users);
  console.table(thoughts);
  console.timeEnd('Seeding complete 🌱 🌞');
  process.exit(0);
});
