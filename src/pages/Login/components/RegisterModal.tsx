import { Row, Col, Button, Input, Select, ConfigProvider } from 'antd'
import CoreModal from '~/components/core/Modal'
import X from '~/components/icons/X'
import FloatLabel from '~/components/core/FloatLabel'
import { CloseOutlined } from '@ant-design/icons'
import { useState } from 'react'

const RegisterModal = () => {
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
        type='primary'
        shape='round'
        size='large'
        variant='solid'
        className='headline-5 text-white bg-primary mb-2 w-100'
        onClick={showModal}
      >
        Create account
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
        footer={
          <>
            <div className='px-14'>
              <Button
                type='primary'
                shape='round'
                size='large'
                variant='solid'
                className='headline-5 text-dark bg-smoke mb-2 w-100'
                style={{ height: 50 }}
                onClick={showModal}
              >
                Next
              </Button>
            </div>
          </>
        }
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        closable={false}
        classname='bg-steel-blue bg-opacity-50'
        width={600}
      >
        <div className='px-14 my-8'>
          <h2 className='headline-3 text-white mb-6'>Create your account</h2>
          <FloatLabel id='floatingInputName' label='Name'>
            <Input className='form-control mb-5' id='floatingInputName' placeholder='' />
          </FloatLabel>
          <FloatLabel id='floatingInputName' label='Email'>
            <Input className='form-control' id='floatingInputName' placeholder='' />
          </FloatLabel>

          <h4 className='headline-5 text-white mt-8'>Date of birth</h4>
          <h5 className='text-description text-smoke mb-5'>
            This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or
            something else.
          </h5>
          <div className='d-flex justify-content-between'>
            <ConfigProvider
              theme={{
                components: {
                  Select: {
                    fontSize: 20,
                    fontSizeIcon: 16,
                    optionFontSize: 16,
                    optionPadding: '8px 16px'
                  }
                }
              }}
            >
              <FloatLabel id='floatingSelectMonth' label='Month'>
                <Select
                  className='form-control px-0'
                  id='floatingSelectMonth'
                  variant='borderless'
                  style={{ width: 210 }}
                  options={[
                    { value: 'jack', label: 'Jack' },
                    { value: 'lucy', label: 'Lucy' },
                    { value: 'Yiminghe', label: 'yiminghe' },
                    { value: 'disabled', label: 'Disabled', disabled: true }
                  ]}
                />
              </FloatLabel>
            </ConfigProvider>
            <ConfigProvider
              theme={{
                components: {
                  Select: {
                    fontSize: 20,
                    fontSizeIcon: 16,
                    optionFontSize: 16,
                    optionPadding: '8px 16px'
                  }
                }
              }}
            >
              <FloatLabel id='floatingSelectDay' label='Day'>
                <Select
                  className='form-control px-0'
                  id='floatingSelectDay'
                  variant='borderless'
                  defaultValue='1'
                  style={{ width: 90 }}
                  options={[
                    { value: 1, label: '1' },
                    { value: 2, label: '2' },
                    { value: 3, label: '3' }
                  ]}
                />
              </FloatLabel>
            </ConfigProvider>
            <ConfigProvider
              theme={{
                components: {
                  Select: {
                    fontSize: 20,
                    fontSizeIcon: 16,
                    optionFontSize: 16,
                    optionPadding: '8px 16px',
                    showArrowPaddingInlineEnd: 0
                  }
                }
              }}
            >
              <FloatLabel id='floatingSelectYear' label='Year'>
                <Select
                  className='form-control px-0'
                  id='floatingSelectYear'
                  variant='borderless'
                  defaultValue='2001'
                  style={{ width: 110 }}
                  options={[
                    { value: '2000', label: '2000' },
                    { value: '2001', label: '2001' }
                  ]}
                />
              </FloatLabel>
            </ConfigProvider>
          </div>
        </div>
      </CoreModal>
    </>
  )
}

export default RegisterModal
