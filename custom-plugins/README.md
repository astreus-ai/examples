# Custom Plugins

This project demonstrates how to create and register custom plugins with tools for agents using the Astreus AI framework.

## Features

- **Custom Tool Creation**: Define specialized tools for agents
- **Plugin System**: Package tools into reusable plugins
- **Agent Integration**: Seamlessly add tools to agents
- **Extensibility**: Expand agent capabilities with custom functionality

## Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env
```

3. Edit the `.env` file and add your API keys

## Running

```bash
npm run dev
```

## Code Explanation

```typescript
import { Agent, ToolDefinition, PluginDefinition } from '@astreus-ai/astreus';

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
    }
  },
  handler: async (params) => {
    // Tool implementation
    return { success: true, data: weatherData };
  }
};

// Create and register plugin
const weatherPlugin: PluginDefinition = {
  name: 'weather-plugin',
  version: '1.0.0',
  description: 'Weather information tools',
  tools: [weatherTool]
};

const agent = await Agent.create({ name: 'WeatherAgent' });
await agent.registerPlugin(weatherPlugin);
```

## Environment Variables

```bash
OPENAI_API_KEY=sk-your-openai-api-key-here
DB_URL=sqlite://./astreus.db
```

## More Information

- [Astreus AI Documentation](https://astreus.org/docs)
- [Plugin Features](https://astreus.org/docs/framework/plugin)
- [GitHub Repository](https://github.com/astreus-ai/astreus)