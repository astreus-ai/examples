# Advanced Sub-Agents

This project demonstrates how to build sophisticated multi-agent workflows with complex coordination patterns and specialized capabilities using the Astreus AI framework.

## Features

- **Multi-Model Agent Teams**: Different AI models for different capabilities
- **Complex Coordination**: Advanced delegation and coordination patterns
- **Specialized Roles**: Each agent optimized for specific tasks
- **Executive Coordination**: High-level orchestration of expert teams

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

The example creates a diverse team of specialized agents (strategic planner, creative writer, data scientist) coordinated by an executive team for complex business tasks.

## Environment Variables

```bash
OPENAI_API_KEY=sk-your-openai-api-key-here
ANTHROPIC_API_KEY=your-anthropic-api-key-here
DB_URL=sqlite://./astreus.db
```

## More Information

- [Astreus AI Documentation](https://astreus.org/docs)
- [Sub-Agent Features](https://astreus.org/docs/framework/sub-agents)
- [GitHub Repository](https://github.com/astreus-ai/astreus)