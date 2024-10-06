import React from 'react'
import ListsReports from '../components/lists/ListsReports'
import Search from '../components/Search'

const Reports = () => {
  return (
   <div className='container'>
   <Search/>
   <ListsReports/>
   </div>
  )
}

export default Reports