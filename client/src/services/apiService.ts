import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

const apiService = axios.create({
  baseURL: API_BASE_URL
});

export interface Joke {
  id: string;
  value: string;
}

export const fetchRandomJoke = async (name: string, category: string): Promise<Joke> => {
  try {
    const response = await apiService.get<Joke>(`/jokes/random?name=${name}&category=${category}`);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const fetchCategories = async (): Promise<string[]> => {
  try {
    const response = await apiService.get<string[]>('/categories');
    return response.data;
  } catch (err) {
    throw err;
  }
};
