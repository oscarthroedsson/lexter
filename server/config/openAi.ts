import OpenAI from "openai";

console.log("🔑 OpenAI API Key:", process.env.OPENAI_PROJECT_APIKEY);
console.log("🔑 OpenAI Organization ID:", process.env.OPENAI_ORGANISATION_ID);
console.log("🔑 OpenAI Project ID:", process.env.OPENAI_LEXTER_ID);

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_PROJECT_APIKEY,
  organization: process.env.OPENAI_ORGANISATION_ID,
  project: process.env.OPENAI_LEXTER_ID,
});
