import { Joke } from '../services/apiService';

export const saveJokeToLocalStorage = (joke: Joke): void => {
  const myJokes = localStorage.getItem('myJokes');
  let myJokesParsed: Joke[] = [];

  if (myJokes) {
    myJokesParsed = JSON.parse(myJokes);
  }

  myJokesParsed.push(joke);
  localStorage.setItem('myJokes', JSON.stringify(myJokesParsed));
};

export const getJokesFromLocalStorage = (): Joke[] => {
  const jokesString = localStorage.getItem('myJokes');

  if (jokesString) {
    const jokes: Joke[] = JSON.parse(jokesString);
    return jokes;
  }

  return [];
};

export const removeJokeFromLocalStorage = (jokes: Joke[], id: string): Joke[] => {
  const newJokesList = jokes.filter((joke) => joke.id !== id);
  localStorage.setItem('myJokes', JSON.stringify(newJokesList));
  return newJokesList;
};
