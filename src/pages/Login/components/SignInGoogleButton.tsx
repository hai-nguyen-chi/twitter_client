import { Button } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import Google from '~/components/icons/Google'

const SignInGoogleButton = () => {
  const navigate = useNavigate()

  const googleOauthUrl = () => {
    const {
      VITE_GOOGLE_AUTH_URI,
      VITE_GOOGLE_REDIRECT_URI,
      VITE_GOOGLE_CLIENT_ID,
      VITE_GOOGLE_SCOPE_EMAIL,
      VITE_GOOGLE_SCOPE_PROFILE
    } = import.meta.env
    const query = {
      redirect_uri: VITE_GOOGLE_REDIRECT_URI,
      client_id: VITE_GOOGLE_CLIENT_ID,
      access_type: 'offline',
      response_type: 'code',
      prompt: 'consent',
      scope: [VITE_GOOGLE_SCOPE_EMAIL, VITE_GOOGLE_SCOPE_PROFILE].join(' ')
    }
    const queryString = new URLSearchParams(query).toString()
    return VITE_GOOGLE_AUTH_URI + queryString
  }
  return (
    <Button
      type='primary'
      shape='round'
      size='large'
      variant='solid'
      className='headline-5 text-white bg-white mb-2 w-100'
    >
      <Link to={googleOauthUrl()} className='text-decoration-none d-flex align-items-center'>
        <Google></Google>
        <span className='text-black d-block ms-2'>Sign in with google</span>
      </Link>
    </Button>
  )
}

export default SignInGoogleButton
