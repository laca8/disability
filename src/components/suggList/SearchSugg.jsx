import React from 'react'
import {useNavigate} from 'react-router-dom'
const SearchSugg = () => {
    
  return (
    <div className=' mt-10 font-bold'>
    <p className='font-bold text-center '> شاشة بحث الاستعلامات</p>
    <div className='border-2 border-gray-400'> 
     

     <div className='grid grid-cols-2 justify-evenly  max-sm:grid-cols-1 text-right p-3'>
     <div className='flex flex-col w-auto p-1'>
        <label>اسم المتصل</label>
        <input className='bg-gray-100 p-1 w-full rounded-sm border-2 border-gray-400' type='text' placeholder='ادخل اسم المتصل' />
      </div>
      <div className='flex flex-col  w-auto p-1'>
        <label>رقم التليفون <span className='text-red-700'>*</span></label>
        <input className='bg-gray-100 p-1 rounded-sm border-2 border-gray-400' type='number' placeholder='ادخل رقم التليفون' />
      </div>
      <div className='flex flex-col  w-auto p-1'>
  
          <label>نوع الاستعلام</label>
            <select id="countries" className="bg-gray-100 p-1 rounded-sm border-2 border-gray-400"  >
              <option selected>اختر نوع الاستعلام</option>
              <option >1</option>
              <option >2</option>
            </select>
      </div>
      <div className='flex flex-col  w-auto p-1'>
          <label>جهة الاستعلام<span className='text-red-700'>*</span></label>
            <select id="countries" className="bg-gray-100 p-1 rounded-sm w-full border-2 border-gray-400">
              <option selected>اختر جهة الاستعلام</option>
              <option >هيئة الإسعاف المصرية</option>
              <option >الهيئة العامة للتأمين الصحي</option>
              <option >أمانة المراكز</option>
              <option >القطاع العلاجى</option>
              <option >القطاع التعليمي</option>
              <option >الصحة النفسية</option>
              <option >قطاع السكان و تنظيم الاسرة</option>
              <option >بنوك الدم</option>
              <option >الطب الوقائى</option>
              <option >الإتصال السياسي</option>
              <option >خدمة المواطنين</option>
              <option >الرعاية الأساسية</option>
              <option >العاملين الصحيين</option>
            </select>
          </div>
     </div>
    </div>
  <div className='flex flex-row items-start gap-3 mt-2'>
    <button className='bg-yellow-600 p-1 rounded-sm text-white' >بحث</button>
  
  </div>
    
</div>
  )
}

export default SearchSugg