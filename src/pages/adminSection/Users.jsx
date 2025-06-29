import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import ProfileNotification from '@/components/ProfileNotification'
import ReusableTable from '@/components/ReusableTable'
import usersData from '@/data/users.json'
import { useTranslation } from 'react-i18next'
import i18n from '@/utils/i18n'

import '../../App.css'
import { useDynamicNamespace } from '@/components/useDynamicNameSpace'

const statusColors = {
  Approved: 'bg-green-100 text-green-700',
  Rejected: 'bg-red-100 text-red-700',
  Pending: 'bg-yellow-100 text-yellow-700',
}

const headers = [
  { key: 'name', label: 'name' },
  { key: 'role', label: 'role' },
  { key: 'email', label: 'email' },
  { key: 'phone', label: 'phone' },
  { key: 'joinOn', label: 'joinOn' },
]

const Users = () => {
  const ns = useDynamicNamespace() // ✅ use the namespace from the URL
  const { t } = useTranslation([ns, 'static']) // ✅ load both main + fallback
  const currentLang = i18n.language

  const [tableJson, setTableJson] = useState([])
  const [searchVal, setSearchVal] = useState('')
  const [debounceVal, setDebounceVal] = useState('')
  const [filteredItems, setFilteredItems] = useState([])

  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    setTableJson(usersData)
  }, [])

  // Pagination logic

  const itemsPerPage = 10
  const start = (currentPage - 1) * itemsPerPage
  const activeItems = tableJson.slice(start, start + itemsPerPage)
  const totalPages = Math.ceil(tableJson.length / itemsPerPage)

  useEffect(() => {
    const interval = setTimeout(() => {
      setDebounceVal(searchVal)
    }, 500)
    return () => clearTimeout(interval)
  }, [searchVal])

  useEffect(() => {
    const searchingItems = tableJson.filter((a) =>
      `${a.name} ${a.role}`.toLowerCase().includes(debounceVal.toLowerCase())
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

      <div className='overflow-x-auto md:overflow-x-visible'>
        <Card className='min-w-[768px]'>
          <CardContent className='p-0'>
            <div className='p-4 flex justify-between items-center'>
              <h2 className='text-lg font-semibold'>
                {currentLang === 'ar' ? t('Users') : 'Users'}
              </h2>
              <div className='flex gap-3'>
                <Input
                  className='min-w-[450px]'
                  type='search'
                  placeholder={t('Search')}
                  value={searchVal}
                  onChange={(e) => setSearchVal(e.target.value)}
                />
                <Button variant='outline'>{t('Filters')}</Button>
              </div>
            </div>

            <ReusableTable
              headers={headers}
              data={filteredItems}
              statusColors={statusColors}
            />

            {/* Pagination Controls */}
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

export default Users
