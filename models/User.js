const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      validate: {
        validator: (email) => {
          return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email);
        },
        message: 'Email validation failed'
      }
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      }
    ],
  },
  {
    toJSON: {
      toJSON: {
        virtuals: true,
      },
    },
    id: false,
  }
);

userSchema
  .virtual('friendCount')
  .get(function () {
    return this.friends.length;
  })
// To Delete?
// .set(function (v) {
//   const [first, last] = v.split("")
//   this.set({ first, last })
// });

// Create the User model and export module
const User = model('User', userSchema);

module.exports = User;