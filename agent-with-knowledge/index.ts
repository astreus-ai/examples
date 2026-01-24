import { config } from 'dotenv';
import { Agent } from '@astreus-ai/astreus';

// Load environment variables
config();

async function main() {
  // Create agent with knowledge enabled
  const agent = await Agent.create({
    name: 'CosmosBot',
    model: 'gpt-4o',
    embeddingModel: 'text-embedding-3-small', // Specify embedding model directly
    knowledge: true,
    systemPrompt: 'You can search and retrieve information from scientific knowledge bases about the cosmos and universe.'
  });
  
  // Add knowledge from scientific book about the sun and cosmos
  await agent.addKnowledgeFromFile(
    './data/The Sun\'s Light and Heat.pdf',
    { category: 'solar-physics', version: '1.0' }
  );
  
  // Agent automatically uses knowledge in conversations
  const response = await agent.ask("What is Correction for Atmospheric Absorption? Explain.");
  console.log(response); // Uses knowledge base automatically
}

main().catch(console.error);
