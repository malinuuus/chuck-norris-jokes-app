import { BackspaceOutlined } from '@mui/icons-material';
import { CardContent } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import './index.css';
import { Joke } from '../../apiService';

export const MyJokes: FC = () => {
  const [myJokes, setMyJokes] = useState<Joke[]>([]);

  useEffect(() => {
    const jokesString = localStorage.getItem('myJokes');

    if (jokesString) {
      const jokes: Joke[] = JSON.parse(jokesString);
      setMyJokes(jokes);
    }
  }, []);

  const removeJoke = (id: string): void => {
    const newJokesList = myJokes.filter(joke => joke.id !== id);
    localStorage.setItem('myJokes', JSON.stringify(newJokesList));
    setMyJokes(newJokesList);
  };

  return (
    <CardContent>
      <h1>My jokes list</h1>
      <ol className='jokes-list'>
        {myJokes.map((joke) => (
          <li key={joke.id}>
            <div className='jokes-list-item'>
              <span>{joke.value}</span>
              <button className='remove-btn' onClick={() => removeJoke(joke.id)}>
                <BackspaceOutlined />
              </button>
            </div>
          </li>
        ))}
      </ol>
    </CardContent>
  );
};
