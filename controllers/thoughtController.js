const { User, Thought } = require('../models');

module.exports = {
  // Get all thoughts
  async getAllThoughts(req, res) {
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
        .populate('students');

      if (!singleThought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json(singleThought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // TODO Create a thought
  async createThought(req, res) {
    try {
      const thoughtData = await Thought.create(req.body);
      res.json(thoughtData);

      const userData = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $push: { thought: thought._id } },
        { new: true },
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
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: 'No thought with this id!' });
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
      const deleteThought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

      if (!deleteThought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.status(200).json({ message: 'Course and students deleted!' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
};
