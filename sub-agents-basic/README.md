# Basic Sub-Agents

This project demonstrates how to create and coordinate multiple AI agents for complex task delegation using the Astreus AI framework.

## Features

- **Multi-Agent Coordination**: Multiple specialized agents working together
- **Task Delegation**: Automatic distribution of tasks to appropriate agents
- **Specialized Roles**: Researcher and writer agents with specific capabilities
- **Auto Delegation**: Intelligent task routing based on agent capabilities

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

The example creates a coordinator agent that manages specialized researcher and writer sub-agents, automatically delegating tasks based on their capabilities.

## Environment Variables

```bash
OPENAI_API_KEY=sk-your-openai-api-key-here
DB_URL=sqlite://./astreus.db
```

## More Information

- [Astreus AI Documentation](https://astreus.org/docs)
- [Sub-Agent Features](https://astreus.org/docs/framework/sub-agents)
- [GitHub Repository](https://github.com/astreus-ai/astreus)