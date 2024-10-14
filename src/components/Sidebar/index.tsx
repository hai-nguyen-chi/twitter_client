import { Avatar, Badge, Button } from 'antd'
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Home from '~/components/icons/Home'
import Search from '~/components/icons/Search'
import Bell from '~/components/icons/Bell'
import Mail from '~/components/icons/Mail'
import Grok from '~/components/icons/Grok'
import Bookmark from '~/components/icons/Bookmark'
import Community from '~/components/icons/Community'
import X from '~/components/icons/X'
import Thunder from '~/components/icons/Thunder'
import User from '~/components/icons/User'
import More from '~/components/icons/More'
import { EllipsisOutlined } from '@ant-design/icons'

interface Navigation {
  icon: ReactNode
  title: string
}

const navigation: Navigation[] = [
  {
    icon: <Home />,
    title: 'Home'
  },
  {
    icon: <Search />,
    title: 'Explore'
  },
  {
    icon: <Bell />,
    title: 'Notifications'
  },
  {
    icon: <Mail />,
    title: 'Messages'
  },
  {
    icon: <Grok />,
    title: 'Grok'
  },
  {
    icon: <Bookmark />,
    title: 'Bookmarks'
  },
  {
    icon: <Community />,
    title: 'Communities'
  },
  {
    icon: <X />,
    title: 'Premium'
  },
  {
    icon: <Thunder />,
    title: 'Business'
  },
  {
    icon: <User />,
    title: 'Profile'
  },
  {
    icon: <More />,
    title: 'More'
  }
]

const Sidebar: React.FC = () => {
  return (
    <div className='d-flex flex-column justify-content-between h-100 me-5'>
      <div>
        <Link to='#' className='d-flex align-items-center' style={{ height: 60 }}>
          <X width={30} height={30} />
        </Link>
        {navigation.map((item: Navigation, index: number) => {
          return (
            <div key={index} className='my-2 py-2'>
              <Link
                to='#'
                className='d-flex align-items-center text-white bodyline-5 text-decoration-none'
                style={{ fontSize: 20 }}
              >
                <Badge dot={true} color='rgb(45, 183, 245)'>
                  <div>{item.icon}</div>
                </Badge>
                <div className='ms-5 text-decoration-none'>{item.title}</div>
              </Link>
            </div>
          )
        })}
        <Button
          type='primary'
          shape='round'
          size='large'
          variant='solid'
          className='headline-5 text-white bg-primary w-100 mt-5'
          style={{ height: 50 }}
        >
          Post
        </Button>
      </div>
      <div className='d-flex align-items-center justify-content-between mb-3 p-3'>
        <div className='d-flex align-items-center'>
          <Avatar size={40} style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>
            N
          </Avatar>
          <div className='ms-3'>
            <h3 className='headline-5 text-white mb-1'>Nguyễn Hải</h3>
            <h4 className='bodyline-5 text-smoke mb-0'>@hai_nguyen5785</h4>
          </div>
        </div>
        <div className=''>
          <EllipsisOutlined color='white' className='headline-5 text-white' />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
