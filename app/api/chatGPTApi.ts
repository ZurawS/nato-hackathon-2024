import axios, { AxiosResponse } from 'axios';

const apiUrl = 'https://openai-tide-hackathon.openai.azure.com/openai/deployments/gpt-35/chat/completions?api-version=2023-07-01-preview';

const headers = {
  'Content-Type': 'application/json',
  'api-key': '532b1e2c433f441b8aa53d2c1b96a948',
};

const data = {
  messages: [
    { role: 'system', content: 'You are an AI assistant that helps people find information.' }
  ],
  max_tokens: 800,
  temperature: 0.7,
  frequency_penalty: 0,
  presence_penalty: 0,
  top_p: 0.95,
  stop: null,
};

const handleApiError = (error: any): Error => {
    console.error('API Error:', error);
    return {
      code: 'API_ERROR',
      message: 'An error occurred while calling the API. Please try again later.',
    }
  };

  interface SubstanceDescriptionWithAlternatives {
    substance: string;
    usageDescription: string;
    alternatives: string[];
  }

  interface Error {
    code: string;
    message: string;
  }


export const chatGPTApi = {
  getSubstanceDescriptionWithAlternatives: async (substance: string): Promise<SubstanceDescriptionWithAlternatives | Error> => {
    try {
      const response: AxiosResponse<SubstanceDescriptionWithAlternatives> = await axios.post(apiUrl, data, { headers });
      return response.data;
    } catch (error) {
      return handleApiError(error);
    }
  },
};
