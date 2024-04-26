import { readFile } from "fs/promises";
import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

const openai = new OpenAI();

export default async function askGPT({
  messages,
}: {
  messages: ChatCompletionMessageParam[];
}) {
  const trainingText = (
    await readFile("src/data/training-data.txt")
  ).toString();

  return await openai.chat.completions.create({
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
}
