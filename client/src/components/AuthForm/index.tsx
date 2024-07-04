import { Card, CardContent, TextField, Button } from '@mui/material'
import { FC, useState, ChangeEvent } from 'react'
import { Decoration } from '../Decoration'
import { Logo } from '../Logo'
import './index.css'
import { Link } from 'react-router-dom'

type FormData = {
  email: string
  password: string
}

type AuthFormProps = {
  submitBtnText: string
  redirectText: string
  redirectLinkText: string
  redirectLink: string
}

export const AuthForm: FC<AuthFormProps> = ({
  submitBtnText,
  redirectText,
  redirectLinkText,
  redirectLink
}) => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: ''
  })

  const isButtonDisabled: boolean = !formData.email || !formData.password

  const handleFormDataChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    console.log(formData)
  }

  return (
    <div className='container'>
      <Decoration id='left-decoration' />
      <Card
        className='auth-card'
        sx={{
          borderRadius: '24px',
          boxShadow: '0px 10px 16px rgba(0, 0, 0, 0.25)'
        }}
      >
        <CardContent>
          <Logo />
          <h1 className='form-header'>Explore "Chuck Jokes" with us!</h1>
          <form>
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
              className='submit-btn'
            >
              {submitBtnText}
            </Button>
          </form>
          <p>
            {redirectText}{' '}
            <Link to={redirectLink} className='form-link'>
              {redirectLinkText}
            </Link>
          </p>
          <p className='quote-text'>
            "Chuck Norris can login without signing up, on any website."
          </p>
        </CardContent>
      </Card>
      <Decoration id='right-decoration' />
    </div>
  )
}
