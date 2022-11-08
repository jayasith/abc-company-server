const router = require('express').Router();
const { fileUpload } = require('../controllers/file.controller');
const upload = require("../middleware/multer.middleware")

router.post('/upload', upload.single('image'));

module.exports = router;
