import { config } from 'dotenv';
import { Agent } from '@astreus-ai/astreus';

// Load environment variables
config();

async function main() {
  const agent = await Agent.create({
    name: 'ContextAgent',
    model: 'gpt-4o',
    memory: true,
    autoContextCompression: true,
    systemPrompt: 'You can handle very long conversations efficiently.'
  });

  // Have a long conversation
  for (let i = 1; i <= 20; i++) {
    await agent.ask(`Tell me an interesting fact about space. This is message #${i}.`);
  }

  // Test memory - agent should remember early facts despite context compression
  const response = await agent.ask("What was the first space fact you told me?");
  console.log('Memory test response:', response);
}

main().catch(console.error);