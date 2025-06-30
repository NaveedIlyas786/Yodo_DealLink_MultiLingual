import React, { useEffect, useState } from 'react'

const notifications = [
  {
    id: 1,
    name: 'Drew Cano',
    email: 'drew.cano@gmail.com',
    time: '3 hours ago',
    message: 'signed up.',
    avatar: 'https://i.pravatar.cc/40?img=1',
    unread: true,
    status: 'following',
  },
  {
    id: 2,
    name: 'Zahir Mays',
    email: 'zahir.mays@gmail.com',
    time: '4 hours ago',
    message: 'Subscription upgraded for user zahir.mays@gmail.com',
    avatar: 'https://i.pravatar.cc/40?img=2',
    unread: true,
    status: 'following',
  },
  {
    id: 3,
    name: 'Rene Wells',
    email: 'rene.wells@gmail.com',
    time: '4 hours ago',
    message: 'Payment succeeded for user rene.wells@gmail.com',
    avatar: 'https://i.pravatar.cc/40?img=3',
    unread: true,
    status: 'following',
  },
  {
    id: 4,
    name: 'Joshua Wilson',
    email: 'joshua.wilson@gmail.com',
    time: '4 hours ago',
    message: 'Subscription upgraded for user joshua.wilson@gmail.com',
    avatar: 'https://i.pravatar.cc/40?img=4',
    unread: false,
    status: 'archive',
  },
  {
    id: 5,
    name: 'Loki Bright',
    email: 'zahir.mays@gmail.com',
    time: '5 hours ago',
    message: 'zahir.mays@gmail.com updated profile information.',
    avatar: 'https://i.pravatar.cc/40?img=5',
    unread: false,
    status: 'following',
  },
  {
    id: 6,
    name: 'Lori Bryson',
    email: 'lori.bryson@gmail.com',
    time: '15 hours ago',
    message: 'Password reset requested by user lori.bryson@gmail.com',
    avatar: 'https://i.pravatar.cc/40?img=6',
    unread: false,
    status: 'archive',
  },
  {
    id: 7,
    name: 'Anita Cruz',
    email: 'anita.cruz@gmail.com',
    time: '4 hours ago',
    message: 'Subscription upgraded for user anita.cruz@gmail.com',
    avatar: 'https://i.pravatar.cc/40?img=7',
    unread: false,
    status: 'archive',
  },
  {
    id: 8,
    name: 'Kevin Hart',
    email: 'kevin.hart@gmail.com',
    time: '2 hours ago',
    message: 'kevin.hart@gmail.com logged in from a new device.',
    avatar: 'https://i.pravatar.cc/40?img=8',
    unread: true,
    status: 'following',
  },
  {
    id: 9,
    name: 'Emma Stone',
    email: 'emma.stone@gmail.com',
    time: '1 day ago',
    message: 'Subscription cancelled for user emma.stone@gmail.com',
    avatar: 'https://i.pravatar.cc/40?img=9',
    unread: false,
    status: 'archive',
  },
  {
    id: 10,
    name: 'Henry Cavill',
    email: 'henry.cavill@gmail.com',
    time: '2 days ago',
    message: 'henry.cavill@gmail.com changed account password.',
    avatar: 'https://i.pravatar.cc/40?img=10',
    unread: true,
    status: 'archive',
  },
]

const NotificationItem = ({ notification }) => (
  <div className='flex items-start gap-4 p-4 border-b hover:bg-gray-50 transition'>
    <img
      src={notification.avatar}
      alt={notification.name}
      className='w-10 h-10 rounded-full object-cover'
    />
    <div className='flex-1'>
      <div className='text-sm font-semibold'>
        {notification.name}{' '}
        <span className='text-gray-500 font-normal'>• {notification.time}</span>
      </div>
      <div className='text-sm text-gray-700'>{notification.message}</div>
    </div>
    {notification.unread && (
      <span className='w-2 h-2 bg-orange-500 rounded-full mt-2' />
    )}
  </div>
)

const Notifications = () => {
  const [filteredItems, setFilteredItems] = useState([])
  const [activeTab, setActiveTab] = useState('all')

  useEffect(() => {
    setFilteredItems(notifications)
  }, [])

  const handleTabClick = (statusName) => {
    if (statusName === 'all') {
      setFilteredItems(notifications)
      setActiveTab(statusName)
    } else if (statusName !== 'all') {
      setActiveTab(statusName)
      const StatusBasedItems = notifications.filter(
        (item) => item.status === statusName
      )
      setFilteredItems(StatusBasedItems)
    }
  }
  return (
    <div className='min-h-screen overflow-y-auto flex flex-col flex-1 py-[15px] bg-gray-50'>
      <div className='flex items-center justify-between px-4 py-3 border-b'>
        <h2 className='text-lg font-bold'>Notifications & Logs</h2>
        <div className='flex items-center gap-2'>
          <button
            onClick={() => handleTabClick('all')}
            className={`px-3 py-1 text-sm rounded ${
              activeTab === 'all'
                ? 'bg-green-700 text-white'
                : 'border text-gray-700'
            }`}
          >
            All <span>{notifications.length}</span>
          </button>
          <button
            onClick={() => handleTabClick('following')}
            className={`px-3 py-1 text-sm rounded ${
              activeTab === 'following'
                ? 'bg-green-700 text-white'
                : 'border text-gray-700'
            }`}
          >
            Following{' '}
            <span>
              {
                filteredItems.filter((item) => item.status === 'following')
                  .length
              }
            </span>
          </button>
          <button
            onClick={() => handleTabClick('archive')}
            className={`px-3 py-1 text-sm rounded ${
              activeTab === 'archive'
                ? 'bg-green-700 text-white'
                : 'border text-gray-700'
            }`}
          >
            Archive{' '}
            <span>
              {filteredItems.filter((item) => item.status === 'archive').length}
            </span>
          </button>
        </div>
      </div>
      <div className='divide-y'>
        {filteredItems.map((notif) => (
          <NotificationItem key={notif.id} notification={notif} />
        ))}
      </div>
    </div>
  )
}

export default Notifications
