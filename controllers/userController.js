// Import User model
const { User, Thought } = require('../models')

// Export the User Controller
module.exports = {
  // Get all the users
  async getUsers(req, res) {
    try {
      const users = await User.find()
        .populate('thoughts')
        .select('-__v')
        .sort({ _id: -1 })

      res.json(users);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Get a single user
  async getSingleUser(req, res) {
    try {
      const singleUser = await User.findOne({ _id: req.params.userId })
        .select('-__v')

      if (!singleUser) {
        return res.status(404).json({ message: 'No user with that ID!' });
      }

      res.json(singleUser);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Create a new user
  async createUser(req, res) {
    try {
      const newUser = await User.create(req.body);

      res.json(newUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Update a user
  async updateUser(req, res) {
    try {
      const userData = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!userData) {
        return res.status(404).json({ message: 'No user with that ID!' });
      }

      res.json(userData);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Delete a user and remove their thoughts
  async deleteUser(req, res) {
    try {
      const deleteUser = await User.findOneAndDelete({ _id: req.params.userId });

      if (!deleteUser) {
        return res.status(404).json({ message: 'No such user exists' })
      }

      const thought = await Thought.deleteMany(
        { _id: { $in: User.thoughts } }
      );

      if (!thought) {
        return res
          .status(404)
          .json({ message: 'User deleted, but head empty no thoughts found.' });
      }

      res.json({ message: 'User and their thoughts successfully deleted.' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Add a friend to a user's friend list
  async addFriend(req, res) {
    try {
      const newFriend = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );

      if (!newFriend) {
        return res
          .status(404)
          .json({ message: 'No friend found with that ID 😢' })
      }

      res.status(200).json({ message: 'Friend added! 😄' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Remove friend from a user's friend list
  async removeFriend(req, res) {
    try {
      const deleteFriend = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );

      if (!deleteFriend) {
        return res
          .status(404)
          .json({ message: 'No user found with that ID!' });
      }

      res.json(deleteFriend);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
