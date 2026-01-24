# Agent with Memory

This project demonstrates how to create an AI agent with persistent memory capabilities using the Astreus AI framework.

## Features

- **Persistent Memory**: The agent remembers conversations across sessions
- **Database Storage**: All memory is stored in SQLite database
- **Context Awareness**: Agent can recall previous interactions and user preferences
- **Conversation History**: Maintains full conversation history

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

- `index.ts` - Memory agent example
- `.env.example` - Environment variables template
- `package.json` - Project dependencies
- `tsconfig.json` - TypeScript configuration

## Memory Agent Features

This example agent:
- Uses the GPT-4o model
- Has persistent memory enabled
- Stores conversations in SQLite database
- Can recall previous interactions

## Code Explanation

```typescript
import { Agent } from '@astreus-ai/astreus';

// Create agent with memory enabled
const agent = await Agent.create({
  name: 'MemoryBot',
  model: 'gpt-4o',
  memory: true, // Enable persistent memory
  systemPrompt: 'You are MemoryBot, an AI assistant with persistent memory.'
});

// First conversation
const response1 = await agent.ask("My name is John and I like TypeScript");

// Later conversation - agent remembers
const response2 = await agent.ask("What's my name and what do I like?");
// Should remember John and TypeScript
```

## Memory Demonstration

The example demonstrates memory by:
1. **First conversation**: User introduces themselves
2. **Second conversation**: Agent recalls user information

## Database Storage

The agent uses SQLite database (`astreus.db`) to store:
- Conversation history
- User preferences
- Context information
- Memory embeddings

## Environment Variables

```bash
# Required
OPENAI_API_KEY=sk-your-openai-api-key-here

# Database for memory storage
DB_URL=sqlite://./astreus.db

```

## Memory vs No Memory

**Without Memory:**
- Each conversation is independent
- No context from previous interactions
- Agent starts fresh each time

**With Memory:**
- Remembers previous conversations
- Builds context over time
- Can recall user preferences and information
- Persistent across sessions

## Next Steps

You can extend this memory agent with:
- Knowledge base integration
- Vision capabilities
- Custom plugins
- MCP (Model Context Protocol) integration

## More Information

- [Astreus AI Documentation](https://astreus.org/docs)
- [Memory Features](https://astreus.org/docs/framework/memory)
- [GitHub Repository](https://github.com/astreus-ai/astreus)
