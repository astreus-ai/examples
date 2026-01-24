# Agent with Knowledge

This project demonstrates how to create an AI agent with knowledge base capabilities using the Astreus AI framework.

## Features

- **Knowledge Base Integration**: Agent can ingest and search through documents
- **PDF Support**: Load knowledge from PDF documents
- **Semantic Search**: Uses embeddings for intelligent information retrieval
- **RAG (Retrieval-Augmented Generation)**: Combines knowledge base with AI responses
- **Vector Database**: Stores knowledge embeddings for fast retrieval

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

- `index.ts` - Knowledge agent example
- `data/` - Knowledge base documents
  - `The Sun's Light and Heat.pdf` - Sample scientific document
- `.env.example` - Environment variables template
- `package.json` - Project dependencies
- `tsconfig.json` - TypeScript configuration
- `astreus.db` - SQLite database for knowledge storage

## Knowledge Agent Features

This example agent:
- Uses the GPT-4o model
- Has knowledge base enabled
- Uses text-embedding-3-small for embeddings
- Can search and retrieve scientific information
- Processes PDF documents

## Code Explanation

```typescript
import { Agent } from '@astreus-ai/astreus';

// Create agent with knowledge enabled
const agent = await Agent.create({
  name: 'CosmosBot',
  model: 'gpt-4o',
  embeddingModel: 'text-embedding-3-small',
  knowledge: true, // Enable knowledge base
  systemPrompt: 'You can search and retrieve information from scientific knowledge bases.'
});

// Add knowledge from PDF
await agent.addKnowledgeFromFile(
  './data/The Sun\'s Light and Heat.pdf',
  { category: 'solar-physics', version: '1.0' }
);

// Agent automatically uses knowledge in responses
const response = await agent.ask("What is Correction for Atmospheric Absorption?");
// Retrieves relevant information from knowledge base
```

## Knowledge Demonstration

The example demonstrates knowledge capabilities by:
1. **Loading PDF Document**: Ingests scientific content about the sun
2. **Semantic Search**: Finds relevant information based on queries
3. **Contextual Responses**: Combines knowledge with AI understanding

## Database Storage

The agent uses SQLite database (`astreus.db`) to store:
- Document embeddings
- Chunked text segments
- Metadata (category, version)
- Vector indices for fast retrieval

## Environment Variables

```bash
# Required
OPENAI_API_KEY=sk-your-openai-api-key-here

# Database for knowledge storage
DB_URL=sqlite://./astreus.db

```

## Knowledge vs No Knowledge

**Without Knowledge:**
- Limited to pre-trained model knowledge
- May lack specific domain expertise
- Cannot access custom documents

**With Knowledge:**
- Access to custom document collections
- Domain-specific expertise
- RAG-enhanced responses
- Up-to-date information from your documents

## Supported File Types

- PDF documents
- Text files
- Markdown files
- JSON data
- CSV files

## Adding Knowledge

You can add knowledge in multiple ways:

```typescript
// From file
await agent.addKnowledgeFromFile('./document.pdf');

// From text
await agent.addKnowledge('Your text content here');

// From URL
await agent.addKnowledgeFromURL('https://example.com/document.pdf');
```

## Next Steps

You can extend this knowledge agent with:
- Multiple document sources
- Web scraping capabilities
- Memory integration for context awareness
- Custom plugins for specialized tasks
- MCP (Model Context Protocol) integration

## More Information

- [Astreus AI Documentation](https://astreus.org/docs)
- [Knowledge Features](https://astreus.org/docs/framework/knowledge)
- [GitHub Repository](https://github.com/astreus-ai/astreus)