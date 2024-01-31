const User = require('../entities/user');
const authService = require('../controllers/authController.js');

exports.registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;

   
    const existingUser = await authService.findUserByUsername(username);
    if (existingUser) {
      return res.status(400).json({ message: 'Username already in use' });
    }

   
    const newUser = new User(username, password);

   
    const registeredUser = await authService.registerUser(newUser);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error registering user' });
  }
};

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
