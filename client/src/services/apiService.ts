import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

const apiService = axios.create({
  baseURL: API_BASE_URL
});

export interface Joke {
  id: string;
  value: string;
}

const fetchData = async <T>(path: string): Promise<T> => {
  try {
    const response = await apiService.get<T>(path);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const fetchRandomJoke = async (name: string, category: string): Promise<Joke> => {
  const path = `/jokes/random?name=${name}&category=${category}`;
  return fetchData<Joke>(path);
};

export const fetchCategories = async (): Promise<string[]> => {
  const path = '/categories';
  return fetchData<string[]>(path);
};
