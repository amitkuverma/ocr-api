const Tesseract = require('tesseract.js');
const path = require('path');

exports.processOCR = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    const filePath = path.join(__dirname, '..', req.file.path);

    try {
        const { data: { text } } = await Tesseract.recognize(filePath, 'eng', {
            logger: m => console.log(m) // Logs progress
        });

        res.json({ extractedText: text });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'OCR processing failed' });
    }
};
