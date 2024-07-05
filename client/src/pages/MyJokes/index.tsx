import { BackspaceOutlined } from '@mui/icons-material';
import { CardContent } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import './index.css';
import { Joke } from '../../services/apiService';
import { getJokesFromLocalStorage, removeJokeFromLocalStorage } from '../../utils/localStorage';

export const MyJokes: FC = () => {
  const [myJokes, setMyJokes] = useState<Joke[]>([]);

  useEffect(() => {
    const savedJokes = getJokesFromLocalStorage();
    setMyJokes(savedJokes);
  }, []);

  const removeJoke = (id: string): void => {
    const newJokes = removeJokeFromLocalStorage(myJokes, id);
    setMyJokes(newJokes);
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
