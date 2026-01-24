# Agent Persistence

This project demonstrates how to save and load agents from database for reusability using the Astreus AI framework.

## Features

- **Agent Persistence**: Save agents to database for later use
- **Agent Loading**: Load existing agents by name or ID
- **Configuration Reuse**: Maintain agent settings across sessions
- **Memory Continuity**: Preserved agent memory and context

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

- `index.ts` - Agent persistence example
- `.env.example` - Environment variables template
- `package.json` - Project dependencies
- `tsconfig.json` - TypeScript configuration

## Agent Persistence Features

This example agent:
- Creates and configures agents
- Saves agents to database automatically
- Loads agents by name for reuse
- Maintains agent state and memory

## Code Explanation

```typescript
import { Agent } from '@astreus-ai/astreus';

// Create and save an agent
const agent = await Agent.create({
  name: 'ProjectAssistant',
  model: 'gpt-4o',
  memory: true,
  systemPrompt: 'You are a project management assistant.'
});

// Use the agent
await agent.ask("Remember that our project deadline is March 15th");

// Later, load the same agent by name
const loadedAgent = await Agent.findByName('ProjectAssistant');
const response = await loadedAgent?.ask("What is our project deadline?");
console.log(response); // Should remember March 15th
```

## Persistence Benefits

The agent persistence system provides:
1. **Reusability**: Create once, use multiple times
2. **State Preservation**: Agent memory and configuration persist
3. **Team Sharing**: Multiple users can access the same agent
4. **Version Control**: Track agent evolution over time

## Database Storage

The framework stores:
- Agent configuration
- System prompts
- Model settings
- Memory state
- Plugin configurations
- Usage history

## Environment Variables

```bash
# Required
OPENAI_API_KEY=sk-your-openai-api-key-here

# Database for persistence
DB_URL=sqlite://./astreus.db
```

## Agent Lifecycle

**Creation:**
- Agent is created with configuration
- Automatically saved to database
- Assigned unique ID and name

**Loading:**
- Load by name or ID
- Configuration restored
- Memory state preserved

**Updates:**
- Configuration changes saved automatically
- Memory updates persisted
- Version history maintained

## Next Steps

You can extend this persistence system with:
- Agent versioning and rollback
- Team collaboration features
- Agent templates and cloning
- Performance monitoring

## More Information

- [Astreus AI Documentation](https://astreus.org/docs)
- [Agent Features](https://astreus.org/docs/framework/agent)
- [GitHub Repository](https://github.com/astreus-ai/astreus)