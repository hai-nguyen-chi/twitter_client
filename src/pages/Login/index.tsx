import styles from '~/pages/Login/index.module.scss'
import X from '~/components/icons/X'
import { Row, Col, Divider } from 'antd'
import RegisterModal from '~/pages/Login/components/RegisterModal'
import LoginModal from '~/pages/Login/components/LoginModal'
import SignInGoogleButton from '~/pages/Login/components/SignInGoogleButton'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'

const footer = [
  'About',
  'Download the X app',
  'Help center',
  'Terms of Service',
  'Privacy Policy',
  'Cookie Policy',
  'Accessibility',
  'Ads info',
  'Blog',
  'Careers',
  'Brand Resources',
  'Advertising',
  'Marketing',
  'X for Business',
  'Developers',
  'Directory',
  'Settings',
  '© 2024 X Corp'
]

const Login: React.FC = () => {
  const [params] = useSearchParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (params.get('access_token') && params.get('refresh_token')) {
      localStorage.setItem('access_token', params.get('access_token') as string)
      localStorage.setItem('refresh_token', params.get('refresh_token') as string)
      navigate('/home')
    }
  }, [params])

  return (
    <div className='bg-black vh-100'>
      <Row className={styles['body']}>
        <Col span={12} className='d-flex justify-content-center align-items-center'>
          <X width={380} height={380} />
        </Col>
        <Col span={12} className='d-flex justify-content-center align-items-center'>
          <div>
            <h1 className='headline-1 text-white my-12'>Happening now</h1>
            <div className={styles['controls']}>
              <h4 className='headline-3 text-white mb-8'>Join today.</h4>
              <SignInGoogleButton></SignInGoogleButton>
              <Divider style={{ borderColor: '#2f3336', color: 'white' }}>or</Divider>
              <RegisterModal></RegisterModal>
              <h5 className='bodyline-6 text-smoke mb-15'>
                By signing up, you agree to the{' '}
                <a href='#' className='text-decoration-none'>
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href='#' className='text-decoration-none'>
                  Privacy Policy
                </a>
                , including{' '}
                <a href='#' className='text-decoration-none'>
                  Cookie Use.
                </a>
              </h5>
              <h4 className='headline-5 text-white mb-5'>Already have an account?</h4>
              <LoginModal></LoginModal>
            </div>
          </div>
        </Col>
      </Row>
      <Row className={styles['footer']}>
        <Col span={24} className='d-flex justify-content-center align-items-center'>
          {footer.map((item: string) => (
            <a className='text-decoration-none px-2 align-middle text-smoke' href='#' key={item}>
              {item}
            </a>
          ))}
        </Col>
      </Row>
    </div>
  )
}

export default Login
