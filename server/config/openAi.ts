import OpenAI from "openai";

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_PROJECT_APIKEY,
  organization: process.env.OPENAI_ORGANISATION_ID,
  project: process.env.OPENAI_SANITASHEALTHAPP_ID,
});
