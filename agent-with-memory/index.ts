import { config } from 'dotenv';
import { Agent } from '@astreus-ai/astreus';

// Load environment variables
config();

async function main() {
  const agent = await Agent.create({
    name: 'MemoryBot',
    model: 'gpt-4o',
    memory: true,
    systemPrompt: 'You remember our conversation history.'
  });

  // First conversation
  const response1 = await agent.ask("My name is John and I like TypeScript");
  console.log(response1);

  // Later conversation - agent remembers
  const response2 = await agent.ask("What's my name and what do I like?");
  console.log(response2); // Should remember John and TypeScript
}

main().catch(console.error);