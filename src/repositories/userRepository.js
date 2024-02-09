const User = require('../entities/user');
const db = require('../adapters/database');

exports.saveUser = async (user) => {
  try {
    const savedUser = await db.save(user);
    return savedUser;
  } catch (error) {
    throw new Error('Error saving user');
  }
};

exports.findUserByUsername = async (username) => {
  try {
    const user = await db.findOne({ username });
    return user;
  } catch (error) {
    throw new Error('Error finding user by username');
  }
};
