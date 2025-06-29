import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import i18n from '../../utils/i18n'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

// import RedemptionChart from '@/components/RedemptionChart'
import ProfileNotification from '@/components/ProfileNotification'
import ReusableTable from '@/components/ReusableTable'

import recentActivityJson from '@/data/recentActivity.json'
import userSummaryJson from '../../data/userSummary.json'
import topPerformingOffers from '@/data/topPerformingOffers.json'

import activeUsersImg from '../../assets/activeUsers.png'
import calendarImg from '../../assets/calender.png'
import monthRevenueImg from '../../assets/monthRevenue.png'
import totalRedemptionsImg from '../../assets/totalRedemptions.png'
import * as LucideIcons from 'lucide-react'
const TrendingUp = LucideIcons.TrendingUp

import '../../App.css'
import { useDynamicNamespace } from '@/components/useDynamicNameSpace'

const statusColors = {
  Approved: 'bg-green-100 text-green-700',
  Rejected: 'bg-red-100 text-red-700',
  Pending: 'bg-yellow-100 text-yellow-700',
}

const images = [
  activeUsersImg,
  calendarImg,
  monthRevenueImg,
  totalRedemptionsImg,
]

const UserDashboard = () => {
  const ns = useDynamicNamespace() // ✅ use the namespace from the URL
  const { t } = useTranslation([ns, 'static']) // ✅ load both main + fallback
  const currentLang = i18n.language

  const titles = [
    t(`Active Offers`),
    t(`Total Views This Week`),
    t(`Total Redemptions`),
    t(`Pending Payouts`),
  ]
  const [tableJson, setTableJson] = useState([])
  const [summaryData, setSummaryData] = useState([])
  const [recentActivityData, setRecentActivityData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [searchVal, setSearchVal] = useState('')
  const [debounceVal, setDebounceVal] = useState('')
  const [filteredItems, setFilteredItems] = useState([])

  const itemsPerPage = 10
  const start = (currentPage - 1) * itemsPerPage
  const totalPages = Math.ceil(tableJson.length / itemsPerPage)

  const headers = [
    { key: 'offerName', label: t('offerName') },
    { key: 'views', label: t('Views') },
    { key: 'redemptions', label: t('Redemptions') },
    { key: 'convertionRate', label: t('Convertion Rate') },
    { key: 'status', label: t('Status') },
  ]

  useEffect(() => {
    setSummaryData(userSummaryJson)
    setRecentActivityData(recentActivityJson)
    setTableJson(topPerformingOffers)
  }, [])

  useEffect(() => {
    const interval = setTimeout(() => {
      setDebounceVal(searchVal)
    }, 500)
    return () => clearTimeout(interval)
  }, [searchVal])

  useEffect(() => {
    const searchingItems = tableJson.filter((a) =>
      `${a.merchant} ${a.offerTitle}`
        .toLowerCase()
        .includes(debounceVal.toLowerCase())
    )
    setFilteredItems(searchingItems.slice(start, start + itemsPerPage))
  }, [debounceVal, tableJson, currentPage])

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  return (
    <div className='min-h-screen overflow-y-auto flex flex-col flex-1 py-[15px] bg-gray-50'>
      {/* Header */}
      <ProfileNotification />

      {/* Summary Cards */}
      <div className='my-5'>
        <h2 className='text-md font-semibold'>{t('Summary Overview')}</h2>
        <div className='flex flex-wrap gap-4'>
          {summaryData.map((a, index) => (
            <div
              key={index}
              className='p-4 rounded-2xl bg-white flex-1 min-w-[200px]'
            >
              <img
                src={images[index]}
                alt={a.title}
                className='w-10 h-10 mb-2'
              />
              <h2 className='text-lg font-semibold'>{titles[index]}</h2>
              <h1 className='text-[22px] font-bold flex items-center gap-2'>
                {t(`${a.value}`)}
                <span className='text-[#17642F] text-sm flex items-center'>
                  <TrendingUp />
                  {a.change}
                </span>
              </h1>
              <p>{t(`${a.description}`)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Chart */}
      {/* <RedemptionChart /> */}

      {/* Offers Table + Recent Activity */}
      <div className='flex bg-white rounded-[20px] p-[1px] gap-[20px] overflow-x-auto w-full xll:overflow-x-visible'>
        {/* Offers Table */}
        <Card className='flex-[1] min-w-[768px]'>
          <CardContent className='p-0'>
            <div className='p-4 flex justify-between items-center'>
              <h2 className='text-lg font-semibold'>
                {t('Top Performing Offer')}
              </h2>
              <Input
                type='text'
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                placeholder={t('Search...')}
                className='max-w-[200px]'
              />
            </div>

            <ReusableTable
              headers={headers}
              data={filteredItems}
              statusColors={statusColors}
            />

            {/* Pagination */}
            <div className='flex justify-between items-center p-4 border-t text-sm'>
              <span>
                {currentLang === 'ar'
                  ? `${t('Page')} ${currentPage} ${t('of')} ${totalPages}`
                  : `Page ${currentPage} of ${totalPages}`}
              </span>
              <div className='space-x-2'>
                <Button
                  disabled={currentPage === 1}
                  onClick={handlePrev}
                  variant='outline'
                  size='sm'
                >
                  {currentLang === 'ar' ? t('Previous') : 'Previous'}
                </Button>
                <Button
                  disabled={currentPage === totalPages}
                  onClick={handleNext}
                  variant='outline'
                  size='sm'
                >
                  {currentLang === 'ar' ? t('Next') : 'Next'}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default UserDashboard
