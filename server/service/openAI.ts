import { openai } from "../config/openAi";

export async function chatAI(contentPrompt: string) {
  try {
    const recipeDescription = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a helpful school assistant that help students with their homework",
        },
        {
          role: "user",
          content: contentPrompt,
        },
      ],
      max_tokens: 100,
    });

    return recipeDescription.choices[0].message.content;
  } catch (error) {
    console.log("⚠️ ERROR CHAT-GPT: ", error);
    return null;
  }
}
