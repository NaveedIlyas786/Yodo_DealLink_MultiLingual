import React from 'react'

const FilterSidebar = ({ filters, setFilters, applyFilters, closeFilter }) => {
  const updateFilter = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter((v) => v !== value)
        : [...prev[type], value],
    }))
  }

  return (
    <div className='absolute top-20 right-8 bg-white shadow-md rounded-xl p-4 w-64 z-50'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='font-semibold text-lg'>Filter</h2>
        <button onClick={closeFilter}>&times;</button>
      </div>

      <div className='text-sm text-gray-500 mb-1'>Filter By Latest Update</div>
      {['All', 'Pending', 'Approved', 'Rejected'].map((status) => (
        <div key={status} className='mb-1'>
          <label className='inline-flex items-center space-x-2'>
            <input
              type='checkbox'
              className='form-checkbox'
              checked={filters.status.includes(status)}
              onChange={() => updateFilter('status', status)}
            />
            <span>{status}</span>
          </label>
        </div>
      ))}

      <div className='text-sm text-gray-500 mt-4 mb-1'>Category</div>
      {['Beauty', 'Food', 'Fitness'].map((category) => (
        <div key={category} className='mb-1'>
          <label className='inline-flex items-center space-x-2'>
            <input
              type='checkbox'
              className='form-checkbox'
              checked={filters.category.includes(category)}
              onChange={() => updateFilter('category', category)}
            />
            <span>{category}</span>
          </label>
        </div>
      ))}

      <button
        onClick={applyFilters}
        className='mt-4 w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white py-2 rounded-full'
      >
        Apply Now
      </button>
    </div>
  )
}

export default FilterSidebar
