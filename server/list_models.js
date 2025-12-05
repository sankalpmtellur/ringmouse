import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error('No API key found in .env');
  process.exit(1);
}

async function listModels() {
  const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      console.error('Error listing models:', data.error);
      return;
    }

    console.log('Available Models:');
    if (data.models) {
      data.models.forEach(model => {
        console.log(`- ${model.name} (Supported generation methods: ${model.supportedGenerationMethods.join(', ')})`);
      });
    } else {
      console.log('No models found.');
    }
  } catch (error) {
    console.error('Network error:', error);
  }
}

listModels();
