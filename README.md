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
   
   Replace the API key in `run.js` with your own OpenAI API key:
   ```javascript
   setDefaultOpenAIKey('your-openai-api-key-here');
   setTracingExportApiKey('your-openai-api-key-here');
   ```

   **⚠️ Security Note**: For production use, store your API key in environment variables instead of hardcoding it.

## 🎯 Usage

Run the main demo:
```bash
node run.js
```

This will execute the multi-agent system with example queries.

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

## 📁 Project Structure

```
agentic-demos/
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
