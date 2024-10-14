import { Row, Col, Button, Input, Divider } from 'antd'
import CoreModal from '~/components/core/Modal'
import FloatLabel from '~/components/core/FloatLabel'
import X from '~/components/icons/X'
import { CloseOutlined } from '@ant-design/icons'
import { useState } from 'react'
import SignInGoogleButton from './SignInGoogleButton'

const LoginModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }
  return (
    <>
      <Button
        shape='round'
        size='large'
        variant='solid'
        className='headline-5 text-primary bg-black w-100'
        onClick={showModal}
      >
        Sign in
      </Button>
      <CoreModal
        title={
          <>
            <Row>
              <Col span={6}>
                <CloseOutlined onClick={handleCancel} />
              </Col>
              <Col span={12} className='d-flex justify-content-center'>
                <X width={30} height={30} />
              </Col>
              <Col span={6}></Col>
            </Row>
          </>
        }
        footer={null}
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        closable={false}
        classname='bg-steel-blue bg-opacity-50'
        width={600}
      >
        <div className='px-3 pb-12 mx-30'>
          <h2 className='headline-3 text-white my-6'>Sign in to X</h2>
          <SignInGoogleButton></SignInGoogleButton>
          <Divider style={{ borderColor: '#2f3336', color: 'white' }}>or</Divider>
          <FloatLabel id='floatingInputName' label='Phone, email or username'>
            <Input className='form-control mb-5' id='floatingInputName' placeholder='' />
          </FloatLabel>
          <Button
            type='primary'
            shape='round'
            size='large'
            variant='solid'
            className='headline-5 text-dark bg-white mt-5 w-100'
            style={{ height: 36 }}
            onClick={showModal}
          >
            Next
          </Button>
          <Button
            shape='round'
            size='large'
            variant='solid'
            className='headline-5 text-white bg-black mt-5 w-100'
            onClick={showModal}
          >
            Forgot password?
          </Button>
          <div className='bodyline-5 text-smoke mt-12'>
            Don't have an account?{' '}
            <a href='#' className='text-decoration-none'>
              Sign up
            </a>
          </div>
        </div>
      </CoreModal>
    </>
  )
}

export default LoginModal
