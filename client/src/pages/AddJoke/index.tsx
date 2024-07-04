import { Button, CardContent, TextField } from '@mui/material';
import { FC, FormEvent, useState } from 'react';
import './index.css';

export const AddJoke: FC = () => {
  const [newJoke, setNewJoke] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <CardContent>
      <h1>Add joke</h1>
      <form className='new-joke-form' onSubmit={handleSubmit}>
        <TextField
          label='Joke'
          placeholder='Type your joke here'
          className='new-joke-input'
          value={newJoke}
          onChange={(e) => setNewJoke(e.target.value)}
          focused
          fullWidth
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
