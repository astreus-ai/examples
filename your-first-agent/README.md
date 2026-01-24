# Your First Agent

This project is a simple example to create your first AI agent using the Astreus AI framework.

## Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env
```

3. Edit the `.env` file and add your OpenAI API key:
   - Get your OpenAI API key: https://platform.openai.com/account/api-keys

## Running

```bash
npm run dev
```

## Project Structure

- `index.ts` - Main agent code
- `.env.example` - Environment variables template
- `package.json` - Project dependencies
- `tsconfig.json` - TypeScript configuration

## Agent Features

This example agent:
- Uses the GPT-4o model
- Can create and execute simple tasks
- Stores tasks in SQLite database
- Works as a helpful assistant

## Code Explanation

```typescript
import { Agent } from '@astreus-ai/astreus';

// Create agent
const agent = await Agent.create({
  name: 'MyFirstAgent',
  model: 'gpt-4o',
  systemPrompt: 'You are a helpful assistant.'
});

// Create and execute task
const task = await agent.createTask({
  prompt: "Hello, introduce yourself"
});

const result = await agent.executeTask(task.id);
console.log(result.response);
```

## Next Steps

You can extend this basic example with:
- Memory features
- Knowledge base integration
- Vision capabilities
- Custom plugins
- MCP (Model Context Protocol) integration

## More Information

- [Astreus AI Documentation](https://astreus.org/docs)
- [GitHub Repository](https://github.com/astreus-ai/astreus)