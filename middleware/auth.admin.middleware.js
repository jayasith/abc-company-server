const jwt = require('jsonwebtoken');
const roles = require('../utils/roles.util');

/**
 * use to authorize as admin
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Object} res
 */
const verifyAdminAuth = (req, res, next) => {
  if (req.headers.token) {
    try {
      const token = req.headers.token;
      if (!token) return res.status(401).json({ message: 'Unauthorized' });

      const verified = jwt.verify(token, process.env.JWT_SECRET);

      if (!verified.role === roles.ADMIN) return res.status(401).json({ message: 'Unauthorized' });

      next();
    } catch (err) {
      console.error(err.message);
      return res.status(401).json({ message: 'Unauthorized' });
    }
  }
};

module.exports = { verifyAdminAuth };
