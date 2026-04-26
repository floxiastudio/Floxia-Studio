import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { streamText } from "ai";

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
});

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: google("gemini-2.5-flash"),
    system: `You are the official AI assistant for Floxia Studio, a full-service web design and development agency based in the USA.
Your goal is to answer client questions simply, straightforwardly, and as shortly as possible to save tokens. Use 1-2 sentences max unless a detailed breakdown is explicitly requested. Do not use conversational filler.

COMPANY KNOWLEDGE:
- Identity: We craft high-performance websites, e-commerce stores, and AI-integrated digital systems for ambitious brands worldwide.
- Tech Stack: Next.js, React, Angular, WordPress, Shopify.
- Core Services: Custom Web Development, SEO, E-commerce, AI integrations, chatbots, dashboards. We provide everything related to websites.
- Pricing Tiers:
  1. Starter ("Launch Site"): Starts at $2,000. Best for small businesses, personal brands & early startups.
  2. Growth ("Business Website"): Starts at $4,500. Best for serious businesses wanting leads & conversions.
  3. Premium ("Startup / SaaS Experience"): Starts at $8,500. Best for funded startups, SaaS & high-ticket businesses.

RULES:
- Be extremely concise. Give direct answers.
- If asked about pricing, state the exact tier and price briefly.
- Never write long paragraphs. Keep token usage absolutely minimal.`,
    messages: messages.map((m: any) => ({
      role: m.role,
      content: m.parts
        ? m.parts
            .filter((p: any) => p.type === "text")
            .map((p: any) => p.text)
            .join("")
        : m.content || "",
    })),
  });

  return result.toUIMessageStreamResponse();
}
