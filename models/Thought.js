const { Schema, model, Types } = require('mongoose');

// Make Reaction Schema the subdocument of Thought
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: function (time) {
        time.toLocaleDateString()
      },
    },
  },
);

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: function (time) {
        time.toLocaleDateString()
      },
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      // virtuals: true,
      getters: true,
    },
    id: false,
  }
);


// Create a virtual property `reactionCount` that gets the amount of reactions per thought
thoughtSchema
  .virtual('reactionCount')
  .get(function () {
    return this.reactions.length;
  });

// Create the Thought model and export module
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
