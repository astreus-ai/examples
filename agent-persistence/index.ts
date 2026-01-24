import { config } from 'dotenv';
import { Agent } from '@astreus-ai/astreus';

// Load environment variables
config();

async function main() {
  // Create and save an agent
  const agent = await Agent.create({
    name: 'ProjectAssistant',
    model: 'gpt-4o',
    memory: true,
    systemPrompt: 'You are a project management assistant.'
  });

  // Use the agent
  await agent.ask("Remember that our project deadline is March 15th");
  console.log('Agent created and information stored');

  // Later, load the same agent by name
  const loadedAgent = await Agent.findByName('ProjectAssistant');
  const response = await loadedAgent?.ask("What is our project deadline?");
  console.log('Loaded agent response:', response); // Should remember March 15th
}

main().catch(console.error);