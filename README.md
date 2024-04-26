# Geospatial questions and answers

This is a bare bones AI chat application that leverages data on the Ordnance Survey website to answer questions about Ordnance Survey products.

## Getting started

You need an API key for Open AI to run this project.

Copy the .env-sample to .env and populate the variables

```bash
cp .env-sample .env
```

Install dependencies and run the project

```bash
npm i; npm run dev;
```

Open [localhost](http://localhost:3000/) and ask some questions.

### Example questions

- How would I find the nearest green spaces?
- How would I find if my neighbourhood was a flood risk?
- How do I get this data?

## How is it built?

This project queries the chat GPT API from open AI with prompts from the user, prefixing them with the character that the AI needs to play, and the source material to answer from. In this case the AI will:

> Take the role of a member of the Ordnance survey Consulation and Technical services team. You help customers find straightforward solutions to their geospatial problems.

The AI is then provided with context data and is instructed to only answer questions using this source data.

> Answer the questions in this thread using the following information as source material. Do not answer questions that you cannot answer with this material. The source material is a list of products, which each have a title, a description, and use cases. Source material: ${trainingText}

The source data is fetched from a Content management system (CMS), and comprises of a list of products. Each product includes a:

- Title, a short summary of the product
- Short description
- Sample data link (optional)
- Some example use cases

This source data can be found in the 'data' folder, where each product has its own txt file.

The source material is then combined into a single trainig data file, and included before the query from the user.

The response from the AI is then streamed to the client, where the user can ask questions about the products.

### Tech stack

- openAI API (chat GPT) [docs](https://platform.openai.com/docs/libraries/typescript-javascript-library)
- Next.js [docs](https://nextjs.org/docs)
- Tailwind css [docs](https://tailwindcss.com/docs/installation)
- Vercel's AI SDK [docs](https://sdk.vercel.ai/)
- Contensis CMS API [docs](https://www.contensis.com/help-and-docs/apis/delivery-http)
