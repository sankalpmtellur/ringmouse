import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function listModels() {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    // There isn't a direct listModels method on the client instance in the node SDK easily accessible 
    // without using the model manager, but let's try to just run a simple text prompt on flash to verify.
    
    console.log("Testing gemini-1.5-flash...");
    const result = await model.generateContent("Hello");
    console.log("Success! Response:", result.response.text());
  } catch (error) {
    console.error("Error with gemini-1.5-flash:", error.message);
  }

  try {
    console.log("Testing gemini-1.5-flash-001...");
    const model2 = genAI.getGenerativeModel({ model: "gemini-1.5-flash-001" });
    const result2 = await model2.generateContent("Hello");
    console.log("Success! Response:", result2.response.text());
  } catch (error) {
    console.error("Error with gemini-1.5-flash-001:", error.message);
  }
}

listModels();
