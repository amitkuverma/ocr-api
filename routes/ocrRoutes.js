const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const { processOCR } = require('../controllers/ocrController');

router.post('/extract', upload.single('file'), processOCR);

module.exports = router;
