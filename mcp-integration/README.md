# MCP Filesystem Integration

This project demonstrates how to connect agents with filesystem using Model Context Protocol (MCP) in the Astreus AI framework.

## Features

- **MCP Filesystem Server**: Connect to local filesystem via MCP
- **File Operations**: Read, write, and manage files automatically
- **Directory Access**: Browse and manipulate directory structures
- **Secure Access**: Controlled file system access within project directory

## Installation

### Quick Setup (Recommended)

Run the setup script for automated installation:
```bash
chmod +x setup-mcp.sh
./setup-mcp.sh
```

### Manual Setup

1. Install dependencies:
```bash
npm install
```

2. Install MCP filesystem server globally (optional, but recommended):
```bash
npm install -g @modelcontextprotocol/server-filesystem
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Edit the `.env` file and add your API keys

## MCP Configuration

The MCP filesystem server is configured in `index.ts` with these important considerations:

- **No dash flags**: Astreus security validation prevents arguments starting with `-` 
- **Directory access**: Use absolute paths or current directory (`.`)
- **Arguments format**: `["@modelcontextprotocol/server-filesystem", ".", "/tmp"]`

### Troubleshooting

If you encounter "Dangerous argument" errors:
- Remove any arguments starting with `-` (like `-y`)
- Use full paths instead of relative paths when possible
- Check the Astreus logs for specific validation failures

## Running

```bash
npm run dev
```

## Code Explanation

The example shows how to use MCP filesystem server to:
- Read the `info.txt` file content
- Create a summary and save it to `summary.txt`
- Demonstrate automatic file operations through AI agent

The agent uses `@modelcontextprotocol/server-filesystem` to securely access files within the project directory.

## Environment Variables

```bash
OPENAI_API_KEY=sk-your-openai-api-key-here
```

## More Information

- [Astreus AI Documentation](https://astreus.org/docs)
- [MCP Features](https://astreus.org/docs/framework/mcp)
- [GitHub Repository](https://github.com/astreus-ai/astreus)