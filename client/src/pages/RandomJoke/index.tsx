import {
  Button,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField
} from '@mui/material';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import chuckNorrisImage from '../../assets/750x400_sobowtor-chucka-norrisa.jpg';
import './index.css';
import { fetchCategories, fetchRandomJoke, Joke } from '../../services/apiService';
import { saveJokeToLocalStorage } from '../../utils/localStorage';

export const RandomJoke: FC = () => {
  const [name, setName] = useState<string>('');
  const [categoryName, setCategoryName] = useState<string>('');
  const [randomJoke, setRandomJoke] = useState<Joke | null>(null);
  const [categories, setCategories] = useState<string[]>([]);

  const getRandomJoke = async (): Promise<void> => {
    const result = await fetchRandomJoke(name.trim() || '', categoryName);
    setRandomJoke(result);
  };

  const getCategories = async (): Promise<void> => {
    const result = await fetchCategories();
    setCategories(result);
  };

  useEffect(() => {
    getRandomJoke();
    getCategories();
  }, []);

  const saveJoke = (): void => {
    if (randomJoke) {
      saveJokeToLocalStorage(randomJoke);
    }
  };

  return (
    <CardContent className='content'>
      <div className='top-image'>
        <img src={chuckNorrisImage} alt='Chuck Norris image' />
      </div>
      <div>
        <h1>Get your random joke</h1>
        <p className='random-joke'>{randomJoke?.value}</p>
      </div>
      <div className='joke-options'>
        <div>
          <TextField
            label='Impersonate'
            placeholder='Impersonate Chuck Norris'
            className='form-input'
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            fullWidth
            focused
          />
          <Button className='blue-btn' variant='contained' onClick={getRandomJoke} fullWidth>
            Draw a random {name.trim() || 'Chuck Norris'} Joke
          </Button>
        </div>
        <div>
          <FormControl fullWidth focused className='form-input'>
            <InputLabel id='category-select-label'>Categories</InputLabel>
            <Select
              labelId='category-select-label'
              label='Categories'
              value={categoryName}
              onChange={(e: SelectChangeEvent) => setCategoryName(e.target.value)}
              displayEmpty
              renderValue={
                categoryName
                  ? undefined
                  : () => <span className='placeholder-text'>Categories</span>
              }
            >
              {categories.map((category) => (
                <MenuItem value={category} key={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button className='pink-btn' variant='contained' onClick={saveJoke} fullWidth>
            Save this joke
          </Button>
        </div>
      </div>
    </CardContent>
  );
};
