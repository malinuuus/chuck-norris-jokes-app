import { Card, CardContent, TextField, Button } from '@mui/material';
import { FC, useState, ChangeEvent, FormEvent } from 'react';
import { Decoration } from '../Decoration';
import { Logo } from '../Logo';
import './index.css';
import { Link, useNavigate } from 'react-router-dom';

type FormData = {
  email: string;
  password: string;
};

type AuthFormProps = {
  submitBtnText: string;
  redirectText: string;
  redirectLinkText: string;
  redirectLink: string;
  pathOnSubmit: string;
};

export const AuthForm: FC<AuthFormProps> = ({
  submitBtnText,
  redirectText,
  redirectLinkText,
  redirectLink,
  pathOnSubmit
}) => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: ''
  });

  const isButtonDisabled: boolean = !formData.email || !formData.password;
  const navigate = useNavigate();

  const handleFormDataChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    navigate(pathOnSubmit);
  };

  return (
    <div className='container'>
      <Decoration id='left-decoration' />
      <Card className='card auth-card'>
        <CardContent>
          <Logo />
          <h1 className='form-header'>Explore "Chuck Jokes" with us!</h1>
          <form onSubmit={handleSubmit}>
            <TextField
              label='E-mail'
              name='email'
              type='email'
              placeholder='Type your email'
              focused
              fullWidth
              className='form-input'
              value={formData.email}
              onChange={handleFormDataChange}
            />
            <TextField
              label='Password'
              name='password'
              type='password'
              placeholder='Type your password'
              focused
              fullWidth
              className='form-input'
              value={formData.password}
              onChange={handleFormDataChange}
            />
            <Button
              variant='contained'
              type='submit'
              fullWidth
              disabled={isButtonDisabled}
              className='blue-btn'
            >
              {submitBtnText}
            </Button>
            <p>
              {redirectText}{' '}
              <Link to={redirectLink} className='form-link'>
                {redirectLinkText}
              </Link>
            </p>
          </form>
          <p className='quote-text'>"Chuck Norris can login without signing up, on any website."</p>
        </CardContent>
      </Card>
      <Decoration id='right-decoration' />
    </div>
  );
};
