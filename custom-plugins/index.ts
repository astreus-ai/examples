import { config } from 'dotenv';
import { Agent, ToolDefinition, Plugin } from '@astreus-ai/astreus';

// Load environment variables
config();

async function main() {
  // Define a custom tool
  const weatherTool: ToolDefinition = {
    name: 'get_weather',
    description: 'Get current weather for a location',
    parameters: {
      location: {
        name: 'location',
        type: 'string',
        description: 'City name',
        required: true
      },
      units: {
        name: 'units',
        type: 'string',
        description: 'Temperature units',
        required: false,
        enum: ['celsius', 'fahrenheit']
      }
    },
    handler: async (params) => {
      try {
        // Simulate weather API call
        const weather = {
          temperature: 22,
          conditions: 'sunny',
          location: params.location
        };
        
        return {
          success: true,
          data: weather
        };
      } catch (error) {
        return {
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error'
        };
      }
    }
  };

  // Create plugin
  const weatherPlugin: Plugin = {
    name: 'weather-plugin',
    version: '1.0.0',
    description: 'Weather information tools',
    tools: [weatherTool]
  };

  // Create agent and register plugin
  const agent = await Agent.create({
    name: 'WeatherAgent',
    model: 'gpt-4o'
  });

  await agent.registerPlugin(weatherPlugin);

  // Use the plugin in conversation
  const response = await agent.ask("What's the weather like in Tokyo?");
  console.log('Weather response:', response); // Agent automatically uses the weather tool
}

main().catch(console.error);