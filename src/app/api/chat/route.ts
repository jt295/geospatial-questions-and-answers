import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { readFile } from "fs/promises";

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const trainingText = (
    await readFile("src/data/training-data.txt")
  ).toString();

  const response = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "Take the role of a member of the Ordnance survey Consulation and Technical services team. You help customers find straightforward solutions to their geospatial problems.",
      },
      {
        role: "system",
        content: `Answer the questions in this thread using the following information as source material. Do not answer questions that you cannot answer with this material. The source material is a list of products, which each have a title, a description, and use cases. Source material: ${trainingText}`,
      },
      ...messages,
    ],
    model: "gpt-3.5-turbo",
    stream: true,
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
