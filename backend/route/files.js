const express = require('express');
const { uploadImage,getImage } = require('../controllers/image');
const router = express.Router();
const upload = require('../utils/upload')
router.post('/upload',upload.single('file'),uploadImage)
router.get('/file/:fileId', getImage);
module.exports = router