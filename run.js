// Set your OpenAI API key

import { Agent, tool, run, setDefaultOpenAIKey, setTracingExportApiKey } from '@openai/agents';
import { z } from 'zod';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_TRACING_KEY = process.env.OPENAI_TRACING_KEY;
if (!OPENAI_API_KEY || !OPENAI_TRACING_KEY) {
  throw new Error('Please set OPENAI_API_KEY and OPENAI_TRACING_KEY in your .env.local file');
}

setDefaultOpenAIKey(OPENAI_API_KEY);
setTracingExportApiKey(OPENAI_TRACING_KEY);

const historyTutorAgent = new Agent({
    name: 'History Tutor',
    instructions:
      'You provide assistance with historical queries. Explain important events and context clearly.',
  });
  
  const mathTutorAgent = new Agent({
    name: 'Math Tutor',
    instructions:
      'You provide help with math problems. Explain your reasoning at each step and include examples',
  });

  const getWeatherTool = tool({
    name: 'get_weather',
    description: 'Get the current weather for a given city using real weather data',
    parameters: z.object({ city: z.string() }),
    async execute({ city }) {
      try {
        // Using wttr.in API for simple weather output
        const response = await axios.get(
          `https://wttr.in/${encodeURIComponent(city)}?format=3`
        );
        return response.data; // This will be like: 'London: ☀️  +24°C'
      } catch (error) {
        return `Sorry, I couldn't fetch weather data for "${city}". Please try again later.`;
      }
    },
  });
  const weatherAgent = new Agent({
    name: 'Weather Agent',
    instructions:
      'You provide real-time weather information for any city worldwide. When users ask about weather, use the getWeatherTool to fetch current weather data and provide a helpful, conversational response. Include temperature, conditions, humidity, wind speed, and pressure in your response.',
    tools: [getWeatherTool],
  });


  // Using the Agent.create method to ensures type safety for the final output
const triageAgent = Agent.create({
    name: 'Triage Agent',
    instructions:
      "You determine which agent to use based on the user's homework question",
    handoffs: [historyTutorAgent, mathTutorAgent, weatherAgent],
  });


  async function main() {
    const result = await run(triageAgent, 'What is the weather in London? humid?');
    console.log(result.finalOutput);
  }
  
  main().catch((err) => console.error(err));