import { FC } from 'react'
import { AuthForm } from '../../components/AuthForm'

export const Register: FC = () => {
  return (
    <AuthForm
      submitBtnText='Create account'
      redirectText='Already have an account?'
      redirectLinkText='Log in here.'
      redirectLink='/login'
      pathOnSubmit='/login'
    />
  )
}
