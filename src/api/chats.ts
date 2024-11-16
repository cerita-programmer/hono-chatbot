import { Hono } from "hono";
import { generateContent } from "../service/gemini";

const chat = new Hono();

chat.post("/", async (c) => {
  const { message } = await c.req.json();

  const response = await generateContent(message);

  return c.json({
    data: response,
    message: "Message generated successfully",
  });
});

export default chat;
