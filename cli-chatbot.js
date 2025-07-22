import { Agent, tool, run, setDefaultOpenAIKey, setTracingExportApiKey } from '@openai/agents';
import { z } from 'zod';
import axios from 'axios';
import dotenv from 'dotenv';
import readline from 'readline';
import chalk from 'chalk';

dotenv.config({ path: '.env.local' });

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_TRACING_KEY = process.env.OPENAI_TRACING_KEY;
if (!OPENAI_API_KEY || !OPENAI_TRACING_KEY) {
  throw new Error('Please set OPENAI_API_KEY and OPENAI_TRACING_KEY in your .env.local file');
}

setDefaultOpenAIKey(OPENAI_API_KEY);
setTracingExportApiKey(OPENAI_TRACING_KEY);

const getWeatherTool = tool({
  name: 'get_weather',
  description: 'Get the current weather for a given city using real weather data',
  parameters: z.object({ city: z.string() }),
  async execute({ city }) {
    try {
      const response = await axios.get(`https://wttr.in/${encodeURIComponent(city)}?format=3`);
      return response.data;
    } catch (error) {
      return `Sorry, I couldn't fetch weather data for "${city}". Please try again later.`;
    }
  },
});

const WeatherEvent = z.object({
  city: z.string(),
  weather: z.string(),
  temperature: z.string(),
  humidity: z.string(),
  windSpeed: z.string(),
  windDirection: z.string(),
});

const weatherAgent = new Agent({
  name: 'Weather Agent',
  instructions: 'You provide real-time weather information for any city worldwide. When users ask about weather, use the getWeatherTool to fetch current weather data and provide a helpful, conversational response. Respond concisely and to the point.',
  tools: [getWeatherTool],
  outputType: WeatherEvent
});

const historyTutorAgent = new Agent({
  name: 'History Tutor',
  instructions: 'You provide assistance with historical queries. Explain important events and context clearly.',
});

const mathTutorAgent = new Agent({
  name: 'Math Tutor',
  instructions: 'You provide help with math problems. Explain your reasoning at each step and include examples',
});

const triageAgent = Agent.create({
  name: 'Triage Agent',
  instructions: "You determine which agent to use based on the user's question",
  handoffs: [historyTutorAgent, mathTutorAgent, weatherAgent],
  model: 'gpt-4o-mini'
});

// CLI Chatbot Implementation
class CLIChatbot {
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  async start() {
    console.log(chalk.cyan.bold('🤖 Welcome to the AI Assistant CLI!'));
    console.log(chalk.gray('Type your questions and I\'ll help you with history, math, or weather!'));
    console.log(chalk.gray('Type "exit" or "quit" to end the session.\n'));

    this.askQuestion();
  }

  askQuestion() {
    this.rl.question(chalk.green('You: '), async (input) => {
      if (input.toLowerCase() === 'exit' || input.toLowerCase() === 'quit') {
        console.log(chalk.yellow('👋 Goodbye! Thanks for chatting!'));
        this.rl.close();
        return;
      }

      if (input.trim() === '') {
        this.askQuestion();
        return;
      }

      try {
        console.log(chalk.blue('🤔 Thinking...'));
        
        const result = await run(triageAgent, input);
        
        let output = result.finalOutput;
        if (typeof output === 'object') {
          try {
            output = JSON.stringify(output, null, 2);
          } catch (e) {
            output = String(output);
          }
        }
        console.log(chalk.cyan('🤖 Assistant: ') + output);
        console.log(''); // Empty line for readability
        
      } catch (error) {
        console.log(chalk.red('❌ Error: ') + error.message);
        console.log('');
      }

      this.askQuestion();
    });
  }
}

// Start the chatbot
const chatbot = new CLIChatbot();
chatbot.start().catch((err) => {
  console.error(chalk.red('Fatal error:'), err);
  process.exit(1);
}); 