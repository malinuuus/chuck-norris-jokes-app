import { BackspaceOutlined } from '@mui/icons-material';
import { CardContent } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import './index.css';

export const MyJokes: FC = () => {
  const [myJokes, setMyJokes] = useState<string[]>([]);

  useEffect(() => {
    const jokesString = localStorage.getItem('myJokes');

    if (jokesString) {
      const jokes: string[] = JSON.parse(jokesString);
      setMyJokes(jokes);
    }
  }, []);

  return (
    <CardContent>
      <h1>My jokes list</h1>
      <ol className='jokes-list'>
        {myJokes.map((joke) => (
          <li>
            <div className='jokes-list-item'>
              <span>{joke}</span>
              <button className='remove-btn'>
                <BackspaceOutlined />
              </button>
            </div>
          </li>
        ))}
      </ol>
    </CardContent>
  );
};
