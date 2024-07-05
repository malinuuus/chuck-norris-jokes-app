import { FC } from 'react'
import { AuthForm } from '../../components/AuthForm'

export const Login: FC = () => {
  return (
    <AuthForm
      submitBtnText='Log in'
      redirectText="Don't have an account?"
      redirectLinkText='Sign up here.'
      redirectLink='/register'
      pathOnSubmit='/random-joke'
    />
  )
}
