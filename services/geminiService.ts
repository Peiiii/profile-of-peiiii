import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

// Initialize the API client
const apiKey = process.env.API_KEY || ''; // In a real app, ensure this is handled securely
const ai = new GoogleGenAI({ apiKey });

export const sendMessageToGemini = async (
  message: string,
  history: { role: string; content: string }[]
): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    
    // We use generateContent for a single turn, but to maintain context, 
    // ideally we would use the chat API. 
    // Here, we'll demonstrate a simple Chat session creation for better context handling.
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.content }],
      })),
    });

    const result = await chat.sendMessage({
      message: message
    });

    return result.text || "I'm processing that thought... (No text returned)";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I seem to be having trouble connecting to my neural core. Please check the API key configuration.";
  }
};
