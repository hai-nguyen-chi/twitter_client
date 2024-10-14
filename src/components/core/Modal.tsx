import React, { ReactNode } from 'react'
import { ConfigProvider, Modal } from 'antd'

interface ModalProps {
  children: ReactNode
  title: ReactNode
  footer: ReactNode
  isModalOpen: boolean
  handleOk: () => void
  handleCancel: () => void
  closable: boolean
  classname?: string
  width: number
}

const CoreModal: React.FC<ModalProps> = ({
  children,
  title,
  footer,
  isModalOpen,
  handleOk,
  handleCancel,
  closable,
  classname = '',
  width
}: ModalProps) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Modal: {
            headerBg: 'black',
            contentBg: 'black',
            titleColor: 'white'
          }
        }
      }}
    >
      <Modal
        title={title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        closable={closable}
        wrapClassName={classname}
        width={width}
        footer={footer}
        centered={true}
        maskClosable={false}
      >
        {children}
      </Modal>
    </ConfigProvider>
  )
}

export default CoreModal
