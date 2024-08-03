// ObjectId() method for converting studentId string into an ObjectId for querying database
const { User } = require('../models')


module.exports = {
  // Get all the users
  async getAllUsers(req, res) {
    try {
      const userData = await User.find();

      return res.json(userData);
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
        .lean();

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
      const userData = await User.findOneAndUpdate(req.params.id, req.body, { new: true });

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
      const deleteUser = await User.findOneAndRemove({ _id: req.params.userId });

      if (!deleteUser) {
        return res.status(404).json({ message: 'No such user exists' })
      }

      // const thought = await Thought.findOneAndUpdate(
      //   { thought: req.params.userId },
      //   { $pull: { thought: req.params.userId } },
      //   { new: true }
      // );

      // if (!course) {
      //   return res.status(404).json({
      //     message: 'User deleted, but no thoughts found',
      //   });
      // }

      res.json({ message: 'User successfully deleted' });
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
        { $addToSet: { friends: req.body.friendId || req.params.friendId } },
        { new: true }
      );

      if (!newFriend) {
        return res
          .status(404)
          .json({ message: 'No user found with that ID :(' })
      }

      res.json(newFriend);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Remove friend from a user's friend list
  async removeFriend(req, res) {
    try {
      const deleteFriend = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: params.friendId } },
        { new: true }
      );

      if (!deleteFriend) {
        return res
          .status(404)
          .json({ message: 'No user found with that ID :(' });
      }

      res.json(deleteFriend);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
