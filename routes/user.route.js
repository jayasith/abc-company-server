const router = require('express').Router();
const { saveUser, getUsers, loginUser, deleteUser, getUser } = require('../controllers/user.controller');
const { verifyAdminAuth } = require('../middleware/auth.admin.middleware');

router.get('/', getUsers);
router.post('/register', verifyAdminAuth, saveUser);
router.post('/login', loginUser);
router.get('/:id', verifyAdminAuth, getUser);
router.delete('/:id', verifyAdminAuth, deleteUser);

module.exports = router;
