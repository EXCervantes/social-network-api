const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addThought,
  removeThought,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// /api/users/:userId/thought
router.route('/:userId/thought').post(addThought);

// /api/users/:userId/thought/:assignmentId
router.route('/:userId/thought/:assignmentId').delete(removeThought);

module.exports = router;
