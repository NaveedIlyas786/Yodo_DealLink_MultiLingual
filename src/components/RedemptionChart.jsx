import { useState } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ResponsiveContainer,
} from 'recharts'
import dayjs from 'dayjs'
import { useTranslation } from 'react-i18next'

const now = dayjs()

const rawData = [
  // Within last 24 hours
  { date: now.subtract(2, 'hour').format('YYYY-MM-DD'), value: 500 },
  { date: now.subtract(8, 'hour').format('YYYY-MM-DD'), value: 600 },
  { date: now.subtract(20, 'hour').format('YYYY-MM-DD'), value: 550 },

  // Within last 7 days
  { date: now.subtract(2, 'day').format('YYYY-MM-DD'), value: 720 },
  { date: now.subtract(4, 'day').format('YYYY-MM-DD'), value: 680 },
  { date: now.subtract(6, 'day').format('YYYY-MM-DD'), value: 610 },

  // Within last 30 days
  { date: now.subtract(10, 'day').format('YYYY-MM-DD'), value: 750 },
  { date: now.subtract(15, 'day').format('YYYY-MM-DD'), value: 630 },
  { date: now.subtract(29, 'day').format('YYYY-MM-DD'), value: 700 },

  // Within last 12 months (but older than 30 days)
  { date: now.subtract(2, 'month').format('YYYY-MM-DD'), value: 560 },
  { date: now.subtract(5, 'month').format('YYYY-MM-DD'), value: 490 },
  { date: now.subtract(11, 'month').format('YYYY-MM-DD'), value: 510 },

  // Outside all ranges (future date and too old)
  { date: now.add(5, 'day').format('YYYY-MM-DD'), value: 580 }, // future
  { date: now.subtract(2, 'year').format('YYYY-MM-DD'), value: 450 }, // too old
]

const tabs = [
  { label: '12 months', value: '12m' },
  { label: '30 days', value: '30d' },
  { label: '7 days', value: '7d' },
  { label: '24 hours', value: '24h' },
]

export default function RedemptionChart() {
  const [selectedRange, setSelectedRange] = useState('30d')
  const { t } = useTranslation()
  const getFilteredData = () => {
    const now = dayjs()
    let cutoff

    switch (selectedRange) {
      case '24h':
        cutoff = now.subtract(1, 'day')
        break
      case '7d':
        cutoff = now.subtract(7, 'day')
        break
      case '30d':
        cutoff = now.subtract(30, 'day')
        break
      case '12m':
        cutoff = now.subtract(12, 'month')
        break
      default:
        cutoff = now.subtract(30, 'day')
    }

    return rawData
      .filter((entry) => dayjs(entry.date).isAfter(cutoff))
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .map((entry) => ({
        ...entry,
        date: dayjs(entry.date).format('D MMM'),
      }))
  }

  const filteredData = getFilteredData()

  return (
    <div className='flex  flex-col justify-between shadow-md bg-white px-[20px] py-[15px]  rounded-xl items-center mb-6'>
      <div className=' gap-[20px] flex flex-col sm:flex-row justify-between items-center w-[100%] mb-4'>
        <div className='text-center sm-text-left'>
          <h2 className='text-md font-semibold'>
            {t(`Redemptions Over Time`, { ns: 'static' })}
          </h2>
        </div>
        <div className='flex'>
          {tabs.map((tab, idx) => (
            <button
              key={tab.value}
              onClick={() => setSelectedRange(tab.value)}
              className={`
      px-3 py-1 text-sm border
      ${
        selectedRange === tab.value
          ? 'bg-green-100 text-green-700 border-green-400'
          : 'text-gray-500 hover:bg-gray-100 border-gray-300'
      }
      ${idx === 0 ? 'rounded-l-md' : ''}
      ${idx === tabs.length - 1 ? 'rounded-r-md' : ''}
    `}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <ResponsiveContainer width='100%' height={300}>
        <LineChart data={filteredData}>
          <defs>
            <linearGradient id='colorValue' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#16a34a' stopOpacity={0.3} />
              <stop offset='95%' stopColor='#16a34a' stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey='date' />
          <YAxis />
          <Tooltip />
          <CartesianGrid strokeDasharray='3 3' />
          <Area
            type='monotone'
            dataKey='value'
            stroke='#16a34a'
            fillOpacity={1}
            fill='url(#colorValue)'
          />
          <Line type='monotone' dataKey='value' stroke='#16a34a' dot />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
