const jwt = require('jsonwebtoken');
const User = require('../entities/user');
const authService = require('../usecases/authUseCase');

exports.loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const authenticatedUser = await authService.authenticateUser(username, password);

    if (!authenticatedUser) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const token = authService.generateAuthToken(authenticatedUser);

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error logging in' });
  }
};
