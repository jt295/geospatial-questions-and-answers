"use client";

import { useChat } from "ai/react";
import ReactMarkdown from "react-markdown";

export default function Form() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex flex-col mt-auto items-center container mx-auto w-full h-full">
      <div className="prose my-4 w-full">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`w-full ${m.role === "user" ? "mt-16" : ""}`}
          >
            <span className="font-semibold">
              {m.role === "user" ? "User: " : "AI: "}
            </span>
            <ReactMarkdown>{m.content}</ReactMarkdown>
          </div>
        ))}
      </div>

      <form
        className="mt-auto mx-auto w-full justify-center flex pt-8"
        onSubmit={handleSubmit}
      >
        <input
          className="w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          name="Ask-Ordnance-Survey"
          id="Ask-Ordnance-Survey"
          placeholder="Ask Ordnance survey"
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
