import axios, { AxiosResponse } from 'axios';

// Definicja URL API
const openAiApiKey = '532b1e2c433f441b8aa53d2c1b96a948';
const openAiApiUrl = 'https://openai-tide-hackathon.openai.azure.com/'

// Interfejs reprezentujący dane dla encji (np. User)
interface Request {
  i
  // Dodaj inne pola zgodnie z potrzebami
}

// Funkcja pomocnicza do obsługi błędów
const handleApiError = (error: any) => {
  // Dostosuj obsługę błędów zgodnie z potrzebami
  console.error('API Error:', error);
  throw error;
};

// Operacje CRUD dla encji
export const api = {
  // Pobierz wszystkie encje
  getAllEntities: async (): Promise<EntityData[]> => {
    try {
      const response: AxiosResponse<EntityData[]> = await axios.get(`${apiUrl}/entities`);
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },

  // Pobierz pojedynczą encję
  getEntityById: async (id: number): Promise<EntityData> => {
    try {
      const response: AxiosResponse<EntityData> = await axios.get(`${apiUrl}/entities/${id}`);
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },

  // Dodaj nową encję
  addEntity: async (newEntity: EntityData): Promise<EntityData> => {
    try {
      const response: AxiosResponse<EntityData> = await axios.post(`${apiUrl}/entities`, newEntity);
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },

  // Zaktualizuj istniejącą encję
  updateEntity: async (id: number, updatedEntity: EntityData): Promise<EntityData> => {
    try {
      const response: AxiosResponse<EntityData> = await axios.put(`${apiUrl}/entities/${id}`, updatedEntity);
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },

  // Usuń encję
  deleteEntity: async (id: number): Promise<void> => {
    try {
      await axios.delete(`${apiUrl}/entities/${id}`);
    } catch (error) {
      handleApiError(error);
    }
  },
};
