import { config } from 'dotenv';
import { Agent, Graph } from '@astreus-ai/astreus';

config();

async function main() {
  const mainAgent = await Agent.create({
    name: 'FileAnalysisAgent',
    model: 'gpt-4o',
    systemPrompt: 'You are a file analysis agent that processes files using graph-based workflows and MCP tools.'
  });

  const mcpConfig = {
    name: 'filesystem',
    command: "npx", 
    args: ["@modelcontextprotocol/server-filesystem", process.cwd()]
  };

  await mainAgent.addMCPServers([mcpConfig]);
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  const analysisGraph = new Graph({
    name: 'File Summary Workflow',
    maxConcurrency: 1
  }, mainAgent);

  const readTask = analysisGraph.addTaskNode({
    name: 'File Reading',
    prompt: 'Read the content of "./info.txt" file and analyze it.',
    priority: 1
  });

  const summaryTask = analysisGraph.addTaskNode({
    name: 'Summary Creation', 
    prompt: 'Based on the analyzed file content from the previous task, create a concise summary and save it as "./summary.txt" file.',
    dependencies: [readTask],
    priority: 2
  });

  const result = await analysisGraph.run({ 
    stream: true,
    onChunk: (chunk) => {
      console.log(chunk);
    }
  });
}

main().catch(console.error);