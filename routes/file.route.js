const router = require('express').Router();
const { uploadFile } = require('../controllers/file.controller');
const upload = require("../middleware/multer.middleware")

router.post('/upload', upload.single('image'), uploadFile);

module.exports = router;
