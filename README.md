# Agentic Demos

A collection of AI agent demonstrations using the OpenAI Agents framework. This repository showcases different types of AI agents working together to solve various tasks.

## 🚀 Features

- **Multi-Agent System**: Multiple specialized agents working together
- **History Tutor Agent**: Provides assistance with historical queries and context
- **Math Tutor Agent**: Helps with mathematical problems with step-by-step explanations
- **Weather Agent**: Real-time weather information for any location worldwide
- **Triage Agent**: Intelligently routes queries to the appropriate specialist agent

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- OpenAI API key

## 🛠️ Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/agentic-demos.git
   cd agentic-demos
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure your OpenAI API key**
   
   Create a `.env.local` file in the project root with your OpenAI API keys:
   ```bash
   # .env.local
   OPENAI_API_KEY=your-openai-api-key-here
   OPENAI_TRACING_KEY=your-openai-api-key-here
   ```

   **⚠️ Security Note**: The `.env.local` file is already included in `.gitignore` to prevent accidentally committing your API keys.

## 🎯 Usage

### Running the CLI Chatbot

The easiest way to interact with the AI agents is through the interactive CLI chatbot:

```bash
npm run chat
```

This starts an interactive chat session where you can ask questions about:
- **History**: Historical events, figures, and context
- **Math**: Mathematical problems with step-by-step explanations  
- **Weather**: Real-time weather information for any location

### Running the Demo Script

Run the main demo with predefined examples:
```bash
npm start
```

This will execute the multi-agent system with example queries.

### Environment Setup

The chatbot requires environment variables to be set. Create a `.env.local` file in the project root:

```bash
# .env.local
OPENAI_API_KEY=your-openai-api-key-here
OPENAI_TRACING_KEY=your-openai-api-key-here
```

**⚠️ Security Note**: Never commit your `.env.local` file to version control. It's already included in `.gitignore`.

## 🤖 Agent Capabilities

### History Tutor Agent
- Explains historical events and context
- Provides detailed historical information
- Handles various historical queries

### Math Tutor Agent
- Solves mathematical problems step-by-step
- Explains reasoning and methodology
- Provides examples and clarifications

### Weather Agent
- Real-time weather data for any location
- Current temperature, humidity, wind speed, and pressure
- Weather conditions and descriptions
- Global location support

### Triage Agent
- Intelligently routes user queries to appropriate specialists
- Determines the best agent for each type of question
- Ensures optimal response quality

## 💬 CLI Chatbot Features

The interactive CLI chatbot provides a user-friendly way to interact with all agents:

- **Interactive Session**: Start a conversation and ask questions naturally
- **Multi-Agent Support**: Automatically routes your questions to the right specialist
- **Real-time Responses**: Get immediate answers to your queries
- **Easy Exit**: Type "exit" or "quit" to end the session
- **Colored Output**: Beautiful terminal interface with color-coded responses

### Example Chatbot Usage

```bash
npm run chat
```

Then you can ask questions like:
- "What's the weather like in Tokyo?"
- "Can you help me solve 2x + 5 = 15?"
- "Tell me about the French Revolution"

## 📁 Project Structure

```
agentic-demos/
├── cli-chatbot.js     # Interactive CLI chatbot
├── run.js              # Main demo with multi-agent system
├── package.json        # Project dependencies
├── README.md          # This file
└── .gitignore         # Git ignore rules
```

## 🔧 Dependencies

- `@openai/agents`: OpenAI Agents framework
- `axios`: HTTP client for API requests
- `zod`: TypeScript-first schema validation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚠️ Important Notes

- **API Keys**: Never commit API keys to version control. Use environment variables for production.
- **Rate Limits**: Be aware of OpenAI API rate limits when running multiple queries.
- **Cost**: Running AI agents incurs costs based on OpenAI's pricing.

## 🆘 Support

If you encounter any issues or have questions, please open an issue on GitHub.

---

**Built with ❤️ using OpenAI Agents**
