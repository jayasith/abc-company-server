const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const generator = require('generate-password');

const User = require('../models/user.model');

/**
 * use to register the users
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const saveUser = async (req, res) => {
  if (req.body) {
    const { name, email, username, role } = req.body;
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!name || !email || !username || !role) {
      return res.status(400).json({ message: 'Please fill all the fields' });
    }

    if (!email.match(pattern)) {
      return res.status(400).json({ message: 'Please enter a valid email address' });
    }

    try {
      const existingUser = await User.findOne({ $or: [{ email }, { username }], role });
      if (existingUser) {
        return res.status(400).json({
          message: 'An account with this email is already registered',
        });
      }

      let password = generator.generate({
        length: 6,
        numbers: true,
      });

      console.log(password);

      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new User({
        name,
        email,
        username,
        password: hashedPassword,
        role,
      });
      const savedUser = await newUser.save();

      const token = jwt.sign({ user: savedUser._id, role }, process.env.JWT_SECRET);

      return res.status(201).json({ token, role });
    } catch (err) {
      console.error(err.message);
      return res.status(500).send();
    }
  }

  return res.status(400).send();
};

/**
 * use to get all the users
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const getUsers = async (req, res) => {
  try {
    const Users = await User.find({}, { password: 0 });
    return res.status(200).json({ Users: Users });
  } catch (err) {
    console.error(err.message);
    return res.status(500).send();
  }
};

/**
 * use to login users
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const loginUser = async (req, res) => {
  if (req.body) {
    const { username, password, role } = req.body;

    if (!username || !password || !role) {
      return res.status(400).json({ message: 'Please fill all the fields' });
    }

    try {
      const existingUser = await User.findOne({ username, role });
      if (!existingUser) {
        return res.status(401).json({
          message: 'Wrong username or password',
        });
      }

      const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

      if (!isPasswordCorrect) {
        return res.status(401).json({
          message: 'Wrong username or password',
        });
      }

      const token = jwt.sign({ user: existingUser._id, role }, process.env.JWT_SECRET);

      return res.status(200).json({ token, role });
    } catch (err) {
      console.error(err.message);
      return res.status(500).send();
    }
  }

  return res.status(406).send();
};

/**
 * use to delete the specific user
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const deleteUser = async (req, res) => {
  if (req.params.id) {
    try {
      await User.findByIdAndDelete(req.params.id);
      return res.status(200).send();
    } catch (err) {
      console.error(err.message);
      return res.status(500).send();
    }
  }
};

/**
 * use to get the specific user's details
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const getUser = async (req, res) => {
  if (req.params.id) {
    try {
      const User = await User.findById(req.params.id);
      res.status(200).json({ User: User });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
};

module.exports = {
  saveUser,
  getUsers,
  loginUser,
  deleteUser,
  getUser,
};
