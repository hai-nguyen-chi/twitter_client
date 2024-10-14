import { Col, Row } from 'antd'
import { Outlet } from 'react-router-dom'
import Sidebar from '~/components/Sidebar'

const CommonLayout = () => {
  return (
    <div className='bg-black vh-100'>
      <div className='container h-100'>
        <Row className='h-100'>
          <Col span={5}>
            <Sidebar />
          </Col>
          <Col span={19}>
            <Outlet />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default CommonLayout
