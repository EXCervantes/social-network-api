const { User, Thought } = require('../models');

// Export Thought route
module.exports = {
  // Get all thoughts
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find()
      res.json(thoughts);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Get a single thought
  async getSingleThought(req, res) {
    try {
      const singleThought = await Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v')

      if (!singleThought) {
        return res.status(404).json({ message: 'No thought here. Try again!' });
      }

      res.json(singleThought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Create a thought
  async createThought(req, res) {
    try {
      const thoughtData = await Thought.create(req.body);
      if (!thoughtData) {
        res.status(404).json({ message: 'Thought could not be created...' })
      }

      const userData = await User.findOneAndUpdate(
        { userId: req.params.userId },
        { $push: { thought: { thought: Thought.thoughtText } } },
        { runValidators: true, new: true },
      );
      if (!userData) {
        return res
          .status(404)
          .json({ message: 'No user found with that ID :(' })
      }

      res.json(userData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Update a thought
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: { thoughtText: req.body.thoughtText, username: req.body.username } },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: 'No thought here. Try again!' });
      }

      res.json(thought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Delete a thought
  async deleteThought(req, res) {
    try {
      const removeThought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

      if (!removeThought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.status(200).json({ message: 'Thought deleted.' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Add reaction to the Thought by ID
  async addReaction(req, res) {
    try {
      const thoughtReaction = await Thought.findOneAndUpdate(
        { thoughtId: req.params.thoughtId },
        { $addToSet: { reaction: [req.body] } },
        { runValidators: true, new: true }
      );

      if (!thoughtReaction) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.status(200).json({ message: 'Added Reaction successfully!' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Delete reaction to Thought by ID
  async deleteReaction(req, res) {
    try {
      const removeReaction = await Thought.findOneAndUpdate(
        { thoughtId: req.params.thoughtId },
        { $pull: { reaction: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
      );

      if (!removeReaction) {
        return res.status(404).json({ message: 'No thought here. Try again!' });
      }

      res.status(200).json({ message: 'Deleted Reaction successfully!' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
};
