import { config } from 'dotenv';
import { Agent } from '@astreus-ai/astreus';

// Load environment variables
config();

async function main() {
  const agent = await Agent.create({
    name: 'VisionBot',
    model: 'gpt-4o',
    visionModel: 'gpt-4o',
    vision: true,
    systemPrompt: 'You can analyze and describe images in detail.'
  });

  // Analyze an image
  const result = await agent.ask("Analyze this image and describe what you see", {
    attachments: [{
      type: 'image',
      path: './image.jpg'
    }]
  });

  console.log(result); // Detailed image analysis
}

main().catch(console.error);