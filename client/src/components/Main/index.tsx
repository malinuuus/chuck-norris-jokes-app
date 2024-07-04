import { Card, CardContent } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from '../Logo';
import './index.css';

export const Main: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='main-container container'>
      <Card className='card side-bar'>
        <CardContent>
          <div>
            <Logo />
            <ul className='side-bar-menu'>
              <li>
                <NavLink to='/random-joke'>Random joke</NavLink>
              </li>
              <li>
                <NavLink to='/my-jokes'>My jokes</NavLink>
              </li>
              <li>
                <NavLink to='/add-joke'>Add joke</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <NavLink to='/login'>Log out</NavLink>
            <p className='small-text'>made with Chuck by Chuck - 2024</p>
          </div>
        </CardContent>
      </Card>
      <div className='main-content'>
        <Card className='card main-content-card'>{children}</Card>
      </div>
    </div>
  );
};
