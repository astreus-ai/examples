# Context Compression

This project demonstrates how to use Astreus's context compression system for handling long conversations efficiently.

## Features

- **Context Compression**: Automatically compress conversation history
- **Memory Preservation**: Important information retained despite compression
- **Long Conversations**: Handle extended dialogues without context limits
- **Efficient Processing**: Reduced token usage and faster responses

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

- `index.ts` - Context compression example
- `.env.example` - Environment variables template
- `package.json` - Project dependencies
- `tsconfig.json` - TypeScript configuration

## Context Compression Features

This example demonstrates:
- Enabling context compression for long conversations
- Maintaining memory across compressed contexts
- Testing information retention over extended dialogues

## Code Explanation

```typescript
import { Agent } from '@astreus-ai/astreus';

const agent = await Agent.create({
  name: 'ContextAgent',
  model: 'gpt-4o',
  memory: true,
  contextCompression: true,
  systemPrompt: 'You can handle very long conversations efficiently.'
});

// Have a long conversation
for (let i = 1; i <= 20; i++) {
  await agent.ask(`Tell me an interesting fact about space. This is message #${i}.`);
}

// Test memory - agent should remember early facts despite context compression
const response = await agent.ask("What was the first space fact you told me?");
console.log(response);
```

## Environment Variables

```bash
# Required
OPENAI_API_KEY=sk-your-openai-api-key-here

# Database for context storage
DB_URL=sqlite://./astreus.db

```

## More Information

- [Astreus AI Documentation](https://astreus.org/docs)
- [Context Features](https://astreus.org/docs/framework/context)
- [GitHub Repository](https://github.com/astreus-ai/astreus)