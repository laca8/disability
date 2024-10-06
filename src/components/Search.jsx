import React from 'react'

const Search = () => {
  return (
    <div className=' mt-10 font-bold'>
        <p className='font-bold text-center '> شاشة البحث</p>
        <div className='border-2 border-gray-400'> 
         

         <div className='grid grid-cols-2 justify-evenly  max-sm:grid-cols-1 text-right p-3'>
         <div className='flex flex-col w-auto p-1'>
            <label>اسم المتصل</label>
            <input className='bg-gray-100 p-1 w-full rounded-sm border-2 border-gray-400' type='text' placeholder='ادخل اسم المتصل' />
          </div>
          <div className='flex flex-col  w-auto p-1'>
            <label>رقم التليفون </label>
            <input className='bg-gray-100 p-1 rounded-sm border-2 border-gray-400' type='number' placeholder='ادخل رقم التليفون' />
          </div>
          <div className='flex flex-col  w-auto p-1'>
            <label>رقم البلاغ </label>
            <input className='bg-gray-100 p-1 rounded-sm border-2 border-gray-400' type='text' placeholder='ادخل رقم البلاغ' />
          </div> 
          <div className='flex flex-col  w-auto p-1'>
          <label>اسم الحالة</label>
          <input className='bg-gray-100 p-1 rounded-sm border-2 border-gray-400' type='text' placeholder='ادخل اسم الحالة' />
          </div>
         </div>
        </div>
      <div className='flex flex-row items-start gap-3 mt-2'>
        <button className='bg-yellow-600 p-1 rounded-sm text-white' >بحث</button>
      
      </div>
        
    </div>
  )
}

export default Search