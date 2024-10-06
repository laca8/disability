import React from 'react'
import {useNavigate} from 'react-router-dom'

const UpdateReport = () => {
  const navigator = useNavigate()
  const clickToNotes = ()=>{
      navigator('/notes')
  }
  const print = ()=>{
    window.print()
  }
  return (
   <>
   <div className='container mt-10 font-bold text-center '>
   <div className='border-2 border-gray-400 mt-2'> 
          <p className='bg-gray-100 p-1 text-center'>بيانات متلقي البلاغ </p>

         <div className='grid grid-cols-2 justify-evenly  max-sm:grid-cols-1  text-right p-1 w-full'>
         <div className='flex flex-col w-full p-1'>
         <label>متلقي البلاغ<span className='text-red-700 '>*</span></label>
         <input className='bg-gray-100 p-1 w-full rounded-sm border-2 border-gray-400'  type='text' placeholder='ادخل اسم متلقي البلاغ' />
          </div>
          <div className='flex flex-col  w-auto p-1'>
          <label>وسيلة البلاغ<span className='text-red-700 '>*</span></label>
          <input className='bg-gray-100 p-1 w-full rounded-sm border-2 border-gray-400'  type='text' placeholder='ادخل وسيلة البلاغ' />
          </div>
          
         
         </div>
        
        </div>
        <div className='border-2 border-gray-400 mt-2 '> 
          <p className='bg-gray-100 p-1'>  بيانات المتصل</p>

          <div className='grid grid-cols-4 justify-evenly  max-sm:grid-cols-1 text-right p-3'>
         <div className='flex flex-col w-auto p-1'>
            <label>الاسم</label>
            <input className='bg-gray-100 p-1 w-full rounded-sm border-2 border-gray-400' type='text' placeholder='ادخل الاسم' />
          </div>
          <div className='flex flex-col  w-auto p-1'>
            <label>رقم التليفون </label>
            <input className='bg-gray-100 p-1 rounded-sm border-2 border-gray-400' type='number' placeholder='ادخل رقم التليفون' />
          </div>
          <div className='flex flex-col  w-auto p-1'>
            <label>المحافظة </label>
            <input className='bg-gray-100 p-1 rounded-sm border-2 border-gray-400' type='text' placeholder='ادخل المحافظة' />
          </div>
          <div className='flex flex-col  w-auto p-1'>
            <label>المركز/الحي</label>
            <input className='bg-gray-100 p-1 rounded-sm border-2 border-gray-400' type='text' placeholder='ادخل المركز/الحي' />
          </div>
         
          <div className='flex flex-col  w-auto p-1'>
            <label>القرية/الشياخة<span className='text-red-700'>*</span></label>
            <input className='bg-gray-100 p-1 rounded-sm border-2 border-gray-400' type='text'  />
          </div>
          <div className='flex flex-col w-auto p-1 '>
            <label>الوظيفة</label>
            <input className='bg-gray-100 p-1 rounded-sm border-2 border-gray-400' type='text' placeholder='ادخل الوظيفة' />
          </div>
          <div className='flex flex-col w-auto p-1 '>
            <label>النوع</label>
            <input className='bg-gray-100 p-1 rounded-sm border-2 border-gray-400' type='text' placeholder='ادخل النوع' />
          </div>
          <div className='flex flex-col w-auto p-1 '>
            <label>درجة القرابة</label>
            <input className='bg-gray-100 p-1 rounded-sm border-2 border-gray-400' type='text' placeholder='ادخل درجة القرابة' />
          </div>
          <div className='flex flex-col w-auto p-1 '>
            <label>الرقم القومي</label>
            <input className='bg-gray-100 p-1 rounded-sm border-2 border-gray-400' type='text' placeholder='ادخل الرقم القومي' />
          </div>
         </div>
        </div>
        <div className='border-2 border-gray-400 mt-2'> 
          <p className='bg-gray-100 p-1'>  بيانات البلاغ</p>

          <div className='grid grid-cols-4 justify-evenly  max-sm:grid-cols-1 text-right p-3 '>
         <div className='flex flex-col w-auto p-1'>
            <label>اسم الحالة</label>
            <input className='bg-gray-100 p-1 rounded-sm border-2 border-gray-400' type='text' placeholder='ادخل الاسم'  />
          </div>
          <div className='flex flex-col  w-auto p-1'>
          <label>نوع الاعاقة</label>
            <select id="countries" className="bg-gray-100 p-1 rounded-sm w-full border-2 border-gray-400" >
              <option selected>اختر نوع الاعاقة</option>
              <option >اعاقه حركية</option>
              <option >اعاقه سمعية</option>
              <option >اعاقه بصرية</option>
              <option >اعاقه ذهنية</option>
              <option >اعاقه متعددة</option>
            </select>
          </div>
          <div className='flex flex-col w-auto  p-1'>
            <label>سبب الاعاقة</label>
            <input className='bg-gray-100 p-1 rounded-sm border-2 border-gray-400'  type='text' placeholder='ادخل سبب الاعاقة'  />
          </div>
          <div className='flex flex-col  w-auto p-1'>
          <label>جهة البلاغ</label>
            <select id="countries" className="bg-gray-100 p-1 rounded-sm w-full border-2 border-gray-400">
              <option selected>اختر جهة البلاغ</option>
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
          <div className='flex flex-col w-auto p-1'>
            <label>رقم تليفون الحالة </label>
            <input className='bg-gray-100 p-1 rounded-sm border-2 border-gray-400' type='number' placeholder='ادخل رقم التليفون' />
          </div>
          <div className='flex flex-col w-auto p-1'>
            <label>المحافظة </label>
            <input className='bg-gray-100 p-1 rounded-sm border-2 border-gray-400' type='text' placeholder='ادخل المحافظة' />
          </div>
          <div className='flex flex-col w-auto p-1 '>
            <label>المركز/الحي</label>
            <input className='bg-gray-100 p-1 rounded-sm border-2 border-gray-400' type='text' placeholder='ادخل المركز/الحي' />
          </div>
          <div className='flex flex-col  w-auto p-1'>
            <label>القرية/الشياخة<span className='text-red-700'>*</span></label>
            <input className='bg-gray-100 p-1 rounded-sm border-2 border-gray-400' type='text'  />
          </div>
          <div className='flex flex-col w-auto p-1 '>
            <label>النوع</label>
            <input className='bg-gray-100 p-1 rounded-sm border-2 border-gray-400' type='text' placeholder='ادخل النوع' />
          </div>
          <div className='flex flex-col w-auto p-1 '>
            <label>الرقم القومي</label>
            <input className='bg-gray-100 p-1 rounded-sm border-2 border-gray-400' type='text' placeholder='ادخل الرقم القومي' />
          </div>
         </div>
        </div>
    <div className='flex flex-row items-start gap-2 mt-2'>
    <button className='bg-green-800 p-1 rounded-sm text-white'onClick={()=>clickToNotes()} >ملاحظات</button>
    <button className='bg-blue-950 p-1 rounded-sm text-white' >تعديل </button>
    <button className='bg-yellow-700 p-1 rounded-sm text-white' onClick={()=>print()}>طباعة </button>
    </div>
        
    </div>
   </>
  )
}

export default UpdateReport