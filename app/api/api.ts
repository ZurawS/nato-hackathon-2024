import axios, { AxiosResponse } from "axios";

const apiUrl = 'http://10.202.249.136:8080';

const handleApiError = (error: any): Error => {
    console.error('API Error:', error);
    return {
      code: 'API_ERROR',
      message: 'An error occurred while calling the API. Please try again later.',
    }
  };

  interface Error {
    code: string;
    message: string;
  }


export const api = {
  getCountryTradeNames: async (countryCode: string): Promise<string[] | Error> => {
    try {
      const response: AxiosResponse<string[]> = await axios.get(`${apiUrl}/dictionary/tradeNames`, { params: { countryCode } });
      return response.data;
    } catch (error) {
      return handleApiError(error);
    }
  },
};
