import { config } from 'dotenv';
import { Agent } from '@astreus-ai/astreus';

// Load environment variables
config();

async function main() {
  // Create specialized sub-agents
  const researcher = await Agent.create({
    name: 'Researcher',
    model: 'gpt-4o',
    systemPrompt: 'You are an expert researcher who gathers comprehensive information.'
  });

  const writer = await Agent.create({
    name: 'Writer',
    model: 'gpt-4o',
    systemPrompt: 'You are a skilled writer who creates clear, engaging content.'
  });

  // Create main coordinator agent
  const mainAgent = await Agent.create({
    name: 'Coordinator',
    model: 'gpt-4o',
    systemPrompt: 'You coordinate tasks between specialized agents.',
    subAgents: [researcher, writer]
  });

  // Use auto delegation
  const result = await mainAgent.ask(
    'Research artificial intelligence trends and write a summary',
    {
      useSubAgents: true,
      delegation: 'auto'
    }
  );

  console.log('Sub-agent coordination result:', result);
}

main().catch(console.error);