import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

if (!process.env.GEMINI_API_KEY) {
  console.warn('WARNING: GEMINI_API_KEY is not set in environment variables.');
}

// Configure CORS
app.use(cors());
app.use(express.json());

// Configure Multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure uploads directory exists
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

function fileToGenerativePart(path, mimeType) {
  return {
    inlineData: {
      data: fs.readFileSync(path).toString("base64"),
      mimeType
    },
  };
}

app.post('/api/summarize', upload.single('audio'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No audio file uploaded' });
    }

    if (!process.env.GEMINI_API_KEY) {
        return res.status(500).json({ error: 'Gemini API key not configured' });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = "Listen to this audio and provide a concise summary of the key points discussed. Also provide a transcript if possible.";
    
    const imageParts = [
      fileToGenerativePart(req.file.path, req.file.mimetype),
    ];

    const result = await model.generateContent([prompt, ...imageParts]);
    const response = await result.response;
    const text = response.text();

    // Clean up uploaded file
    fs.unlinkSync(req.file.path);

    res.json({ summary: text });

  } catch (error) {
    console.error('Error processing audio:', error);
    if (error.response) {
      console.error('Gemini API Error Details:', JSON.stringify(error.response, null, 2));
    }
    // Clean up file if error occurs
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    res.status(500).json({ error: 'Failed to process audio', details: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
