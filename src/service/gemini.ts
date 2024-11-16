import { GoogleGenerativeAI } from "@google/generative-ai";
import { Chat } from "../type/chat";

const GEMINI_API_KEY = Bun.env.GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

export const generateContent = async (prompt: string) => {
  const model = genAI.getGenerativeModel({ model: "gemini-exp-1114" });

  console.log("Generating content...");

  const result = await model.generateContent(prompt);

  const chat: Chat = {
    author: "bot",
    message: result.response.text(),
  };

  return chat;
};
