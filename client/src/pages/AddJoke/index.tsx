import { Button, CardContent, TextField } from '@mui/material';
import { FC, FormEvent, useState } from 'react';
import './index.css';
import { Joke } from '../../services/apiService';
import { v4 as uuidv4 } from 'uuid';
import { saveJokeToLocalStorage } from '../../utils/localStorage';

export const AddJoke: FC = () => {
  const [newJoke, setNewJoke] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newJoke.trim()) {
      const newJokeObj: Joke = {
        id: uuidv4(),
        value: newJoke.trim()
      };

      saveJokeToLocalStorage(newJokeObj);
      setNewJoke('');
    }
  };

  return (
    <CardContent>
      <h1>Add joke</h1>
      <form className='new-joke-form' onSubmit={handleSubmit}>
        <TextField
          label='Joke'
          placeholder='Type your joke here'
          className='new-joke-input form-input'
          value={newJoke}
          onChange={(e) => setNewJoke(e.target.value)}
          focused
          fullWidth
          multiline
          rows={4}
        />
        <Button
          variant='contained'
          type='submit'
          className='blue-btn'
          fullWidth
          disabled={!newJoke.trim()}
        >
          Add joke
        </Button>
      </form>
    </CardContent>
  );
};
