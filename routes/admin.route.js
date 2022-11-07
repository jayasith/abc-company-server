const router = require('express').Router();
const { adminLogin } = require('../controllers/moderator.controller');
const { logoutUser } = require('../controllers/common.controller');

router.post('/login', loginModerator);
router.get('/logout', logoutUser);

module.exports = router;
