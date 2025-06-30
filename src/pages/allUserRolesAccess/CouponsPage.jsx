import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import React, { useEffect, useState } from 'react'
import CouponsData from '@/data/couponsPage.json'
import ReusableTable from '@/components/ReusableTable'
import '../../App.css'
import { Input } from '@/components/ui/input'
import ProfileNotification from '@/components/ProfileNotification'
import { useTranslation } from 'react-i18next'
import i18n from '@/utils/i18n'
import { useNavigate } from 'react-router-dom'
import FilterSidebar from '@/components/dashboardOffers/FilterSidebar'
import CreateOfferForm from '@/components/dashboardOffers/CreateOfferForm'
import { UseDynamicNamespace } from '@/components/UseDynamicNamespace'

const statusColors = {
  Active: 'bg-green-100 text-green-700',
  Used: 'bg-yellow-100 text-yellow-700',
  Expired: 'bg-red-100 text-red-700',
}

const CouponsPage = () => {
  const currentLang = i18n.language
  const ns = UseDynamicNamespace() // ✅ use the namespace from the URL
  const { t } = useTranslation([ns, 'static']) // ✅ load both main + fallback

  const headers = [
    { key: 'couponCode', label: t('Coupon Code') },
    { key: 'issuedDate', label: t('Issued Date') },
    { key: 'expiryDate', label: t('Expiry Date') },
    { key: 'discount', label: t('Discount') },
    { key: 'status', label: t('Status') },
    { key: 'usedBy', label: t('Used By') },
    { key: 'usageDate', label: t('Usage Date') },
    { key: 'merchant', label: t('Merchant') },
  ]

  const navigate = useNavigate()
  // console.log('Current language table:', t.language)

  const [tableJson, setTableJson] = useState([])

  useEffect(() => {
    setTableJson(CouponsData)
  }, [CouponsData])
  console.log('tableJson: ', tableJson)

  const [currentPage, setCurrentPage] = useState(1)
  const [searchVal, setSearchVal] = useState('')
  const [debounceVal, setDebounceVal] = useState('')
  const [filteredItems, setFilteredItems] = useState([])

  const itemsPerPage = 10

  const start = (currentPage - 1) * itemsPerPage
  const totalPages = Math.ceil(tableJson.length / itemsPerPage)

  useEffect(() => {
    setFilteredItems(tableJson)
  }, [])

  useEffect(() => {
    const interval = setTimeout(() => {
      setDebounceVal(searchVal)
    }, 500)
    return () => clearTimeout(interval)
  }, [searchVal])

  useEffect(() => {
    const searchingItems = tableJson.filter((a) =>
      `${a.status} ${a.couponCode}`
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
  const routeTonewOfferCreation = () => {
    navigate('/offerPage/createnewOffer')
  }
  // ******************Filtering *****************
  const [showFilter, setShowFilter] = useState(false)

  const [filters, setFilters] = useState({
    status: [],
    category: [], // optional if you plan to filter by category too
  })

  const applyFilters = () => {
    let filtered = [...tableJson]

    if (filters.status.length && !filters.status.includes('All')) {
      filtered = filtered.filter((item) => filters.status.includes(item.status))
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

  const [showCreateOfferForm, setShowCreateOfferForm] = useState(false)

  const ShowNewOfferCreationComponent = () => {
    setShowCreateOfferForm(true)
  }

  return (
    <div
      className={`min-h-screen overflow-y-auto flex flex-col flex-1 py-[15px] bg-gray-50`}
    >
      {/* Header */}
      <ProfileNotification />

      <div className='overflow-x-auto md:overflow-x-visible'>
        <Card className='min-w-[768px]'>
          <CardContent className='p-0'>
            {showCreateOfferForm ? (
              // 👉 Show Create Form
              <div className='p-4'>
                <CreateOfferForm goBack={() => setShowCreateOfferForm(false)} />
              </div>
            ) : (
              // 👉 Show Offers Table
              <>
                <div className='p-4 gap-2 flex justify-between items-center'>
                  <h2 className='text-lg kumbh_sans_25'>
                    {currentLang === 'ar' ? t('Coupons') : 'Coupons'}
                  </h2>
                </div>

                <div className='p-4 gap-2 flex justify-between items-center'>
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

                <ReusableTable
                  headers={headers}
                  data={filteredItems}
                  statusColors={statusColors}
                  showActions={false} // ← hide the Actions column here
                />

                {showFilter && (
                  <FilterSidebar
                    filters={filters}
                    setFilters={setFilters}
                    applyFilters={applyFilters}
                    closeFilter={() => setShowFilter(false)}
                    filterOptions={[
                      {
                        label: 'status',
                        key: 'status',
                        options: ['All', 'Active', 'Expired', 'Used'],
                      },
                    ]}
                  />
                )}

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
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default CouponsPage
