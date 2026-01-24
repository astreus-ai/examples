# Agent with Vision

This project demonstrates how to create an AI agent capable of processing and analyzing images using the Astreus AI framework.

## Features

- **Image Analysis**: The agent can analyze and describe images in detail
- **Vision Model Integration**: Uses GPT-4o or other vision-capable models
- **Image Attachments**: Support for various image formats (PNG, JPG, etc.)
- **Multi-modal Processing**: Combine text and image inputs for comprehensive analysis

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

- `index.ts` - Vision agent example
- `.env.example` - Environment variables template
- `package.json` - Project dependencies
- `tsconfig.json` - TypeScript configuration

## Vision Agent Features

This example agent:
- Uses the GPT-4o model with vision capabilities
- Can analyze images and provide detailed descriptions
- Processes image attachments automatically
- Combines visual and textual understanding

## Code Explanation

```typescript
import { Agent } from '@astreus-ai/astreus';

// Create agent with vision enabled
const agent = await Agent.create({
  name: 'VisionBot',
  model: 'gpt-4o',
  visionModel: 'gpt-4o',
  vision: true,
  systemPrompt: 'You can analyze and describe images in detail.'
});

// Analyze an image
const result = await agent.ask("Analyze this image and describe what you see", {
  attachments: [{
    type: 'image',
    path: './screenshot.png'
  }]
});

console.log(result); // Detailed image analysis
```

## Vision Capabilities

The agent can:
1. **Image Description**: Provide detailed descriptions of image content
2. **Object Recognition**: Identify objects, people, and scenes
3. **Text Extraction**: Read text within images (OCR)
4. **Visual Analysis**: Analyze composition, colors, and visual elements
5. **Context Understanding**: Understand relationships between visual elements

## Supported Image Formats

- PNG
- JPG/JPEG
- GIF
- WebP
- BMP

## Environment Variables

```bash
# Required - Vision-capable model API key
OPENAI_API_KEY=sk-your-openai-api-key-here

# Database for agent persistence
DB_URL=sqlite://./astreus.db

```

## Use Cases

**Image Analysis:**
- Medical image analysis
- Product cataloging
- Content moderation
- Accessibility descriptions

**Document Processing:**
- Invoice processing
- Form data extraction
- Receipt analysis
- Chart interpretation

**Creative Applications:**
- Art analysis and critique
- Design feedback
- Photo organization
- Visual storytelling

## Next Steps

You can extend this vision agent with:
- Memory capabilities for image context
- Knowledge base integration
- Custom image processing plugins
- Batch image analysis workflows

## More Information

- [Astreus AI Documentation](https://astreus.org/docs)
- [Vision Features](https://astreus.org/docs/framework/vision)
- [GitHub Repository](https://github.com/astreus-ai/astreus)