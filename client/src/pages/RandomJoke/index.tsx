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
import { ChangeEvent, FC, useState } from 'react';
import chuckNorrisImage from '../../assets/750x400_sobowtor-chucka-norrisa.jpg';
import './index.css';

export const RandomJoke: FC = () => {
  const [name, setName] = useState<string>('');
  const [categoryName, setCategoryName] = useState<string>('');
  console.log(categoryName);

  return (
    <CardContent className='content'>
      <div className='top-image'>
        <img src={chuckNorrisImage} alt='Chuck Norris image' />
      </div>
      <div>
        <h1>Get your random joke</h1>
        <p className='random-joke'>
          “If Chuck Norris were to travel to an alternate dimension in which there was another Chuck
          Norris and they both fight, they would both win”
        </p>
      </div>
      <div className='joke-options'>
        <div>
          <TextField
            label='Impersonate'
            placeholder='Impersonate Chuck Norris'
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            fullWidth
            focused
          />
          <Button className='blue-btn' variant='contained' fullWidth>
            Draw a random Chuck Norris Joke
          </Button>
        </div>
        <div>
          <FormControl fullWidth focused>
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
              <MenuItem value='1'>Category 1</MenuItem>
              <MenuItem value='2'>Category 2</MenuItem>
              <MenuItem value='3'>Category 3</MenuItem>
            </Select>
          </FormControl>
          <Button className='pink-btn' variant='contained' fullWidth>
            Save this joke
          </Button>
        </div>
      </div>
    </CardContent>
  );
};
