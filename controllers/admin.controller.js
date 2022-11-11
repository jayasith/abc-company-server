const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Admin = require('../models/admin.model');
const roles = require('../utils/roles.util');

/**
 * use to login administrator
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const loginAdmin = async (req, res) => {
  if (req.body) {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Please fill all the fields' });
    }

    try {
      const existingAdmin = await Admin.findOne({
        username: username,
      });

      if (!existingAdmin) {
        return res.status(401).json({
          message: 'Wrong username or password',
        });
      }

      const isPasswordCorrect = await bcrypt.compare(password, existingAdmin.password);

      if (!isPasswordCorrect) {
        return res.status(401).json({
          message: 'Wrong username or password',
        });
      }

      const token = jwt.sign({ user: existingAdmin._id, role: roles.ADMIN }, process.env.JWT_SECRET);

      return res.status(200).json({ token: token, role: roles.ADMIN });
    } catch (err) {
      console.error(err.message);
      return res.status(500).send();
    }
  }

  return res.status(406).send();
};

module.exports = { loginAdmin };
