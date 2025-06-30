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
import { UseDynamicNamespace } from '@/components/UseDynamicNamespace'
import FilterSidebar from '../../components/dashboardOffers/FilterSidebar'

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
  const ns = UseDynamicNamespace() // ✅ use the namespace from the URL
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

  const [showFilter, setShowFilter] = useState(false)

  const [filters, setFilters] = useState({
    role: [],
    category: [], // optional if you plan to filter by category too
  })

  // console.log('tableJson: ', tableJson)
  const applyFilters = () => {
    let filtered = [...tableJson]

    if (filters.role.length && !filters.role.includes('All')) {
      filtered = filtered.filter((item) => filters.role.includes(item.role))
    }

    if (filters.category.length) {
      filtered = filtered.filter((item) =>
        filters.category.includes(item.category)
      )
    }

    setFilteredItems(filtered.slice(0, itemsPerPage))
    setCurrentPage(1)
    setShowFilter(false)
  }

  return (
    <div className='min-h-screen overflow-y-auto flex flex-col flex-1 py-[15px] bg-gray-50'>
      {/* Header */}
      <ProfileNotification />

      <div className='overflow-x-auto md:overflow-x-visible'>
        <Card className='min-w-[768px]'>
          <CardContent className='p-0'>
            <div className='p-4 flex justify-between items-center'>
              <h2 className='text-lg kumbh_sans_25'>
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
                <Button
                  variant='outline'
                  className='cursor-pointer'
                  onClick={() => setShowFilter(!showFilter)}
                >
                  {t('Filters')}
                </Button>
              </div>
            </div>

            <ReusableTable
              headers={headers}
              data={filteredItems}
              statusColors={statusColors}
            />

            {showFilter && (
              <FilterSidebar
                filters={filters}
                setFilters={setFilters}
                applyFilters={applyFilters}
                closeFilter={() => setShowFilter(false)}
                filterOptions={[
                  {
                    label: 'Role',
                    key: 'role',
                    options: ['All', 'Admin', 'Editor', 'Viewer'],
                  },
                  // {
                  //   label: 'Category',
                  //   key: 'category',
                  //   options: ['Beauty', 'Food', 'Fitness'],
                  // },
                ]}
              />
            )}

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
