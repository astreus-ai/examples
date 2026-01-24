import { config } from 'dotenv';
import { Agent } from '@astreus-ai/astreus';

// Load environment variables
config();

async function main() {
  const agent = await Agent.create({
    name: 'MyFirstAgent',
    model: 'gpt-4o',
    systemPrompt: 'You are a helpful assistant.'
  });

  // Create and execute a task
  const task = await agent.createTask({
    prompt: "Hello, introduce yourself"
  });

  const result = await agent.executeTask(task.id);
  console.log(result.response);
}

main().catch(console.error);