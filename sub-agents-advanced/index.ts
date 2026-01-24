import { config } from 'dotenv';
import { Agent } from '@astreus-ai/astreus';

// Load environment variables
config();

async function main() {
  // Create diverse agent team with different models
  const strategicPlanner = await Agent.create({
    name: 'StrategicPlanner',
    model: 'gpt-4o',  // High reasoning for strategy
    systemPrompt: 'You are a strategic business consultant with deep analytical thinking.',
    memory: true,
    knowledge: true
  });

  const creativeWriter = await Agent.create({
    name: 'CreativeWriter',
    model: 'claude-3-5-sonnet-20241022',  // Excellent for creative writing
    systemPrompt: 'You are a creative copywriter who crafts compelling narratives.',
    vision: true
  });

  const dataScientist = await Agent.create({
    name: 'DataScientist',
    model: 'gpt-4o',  // Strong analytical capabilities
    systemPrompt: 'You are a data scientist specializing in statistical analysis and insights.',
    useTools: true
  });

  const executiveTeam = await Agent.create({
    name: 'ExecutiveTeam',
    model: 'gpt-4o',  // High-level coordination
    systemPrompt: 'You coordinate executive-level strategic initiatives across expert teams.',
    subAgents: [strategicPlanner, creativeWriter, dataScientist]
  });

  const businessPlan = await executiveTeam.ask(
    'Develop comprehensive go-to-market strategy for AI-powered healthcare platform',
    {
      useSubAgents: true,
      delegation: 'auto',
      coordination: 'sequential'
    }
  );

  console.log('Business plan completed:', businessPlan);
}

main().catch(console.error);