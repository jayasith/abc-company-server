const router = require('express').Router();
const { uploadFile } = require('../controllers/file.controller');
const upload = require("../middleware/multer.middleware")

router.post('/upload', upload.single('file'), uploadFile);

module.exports = router;
