require('dotenv').config();
const express = require('express');
const cors = require('cors');
const ocrRoutes = require('./routes/ocrRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); // Serve uploaded files

app.use('/api/ocr', ocrRoutes); // OCR API Routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
