import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'

const SuggForm = () => {
  const navigator = useNavigate()

  const [sugg,setSugg] = useState('')
  const [suggSide,setSuggSide] = useState('')
  const [report,setReport] = useState('')
  const handleSubmitSugg = ()=>{
    const connector = JSON.parse(localStorage.getItem('connector'))
    console.log(connector); 
    console.log(connector.toString()); 
    console.log(JSON.stringify(connector)); 
    console.log(JSON.parse(JSON.stringify(connector))); 
     

    const disabl ={
     connName:connector.connName,
     connCity:connector.connCity,
     connId:connector.connId,
     connJop:connector.connJop,
     connPhone:connector.connPhone,
     connPlace:connector.connPlace,
     connRelation:connector.connRelation,
     connType:connector.connType,
     sugg,
       report,
       suggSide
      
    }
     console.log(disabl);
     
    navigator('/reports')

  }
  return (
    <div className='mt-10 font-bold'>

        <div className='border-2 border-gray-400'> 
          <p className='bg-gray-100 p-1 text-center'>  بيانات الاستعلام </p>

         <div className='grid grid-cols-3 justify-evenly  max-sm:grid-cols-1  text-right p-1 w-full'>
         <div className='flex flex-col w-full p-2'>
            <label>النوع<span className='text-red-700'>*</span></label>
            <select id="countries" className="bg-gray-100 p-1 rounded-sm border-2 border-gray-400" disabled>
              <option selected>استعلام</option>
            </select>
          </div>
          <div className='flex flex-col w-auto p-2'>
          <label>نوع الاستعلام<span className='text-red-700'>*</span></label>
            <select id="countries" className="bg-gray-100 p-1 rounded-sm border-2 border-gray-400" value={sugg} onChange={(e)=>setSugg(e.target.value)} >
              <option selected>اختر نوع الاستعلام</option>
              <option >1</option>
              <option >2</option>
            </select>
          </div>
          <div className='flex flex-col  w-auto p-1'>
          <label>جهة الاستعلام<span className='text-red-700'>*</span></label>
            <select id="countries" className="bg-gray-100 p-1 rounded-sm w-full border-2 border-gray-400" value={suggSide} onChange={(e)=>setSuggSide(e.target.value)}>
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
         <div className='flex flex-col p-3 text-right '>
            <label>ملخص الطلب</label>
            <textarea id="message" rows="4" className="bg-gray-100  rounded-sm w-full border-2 border-gray-400" value={report} onChange={(e)=>setReport(e.target.value)} ></textarea>
          </div>
        </div>
        <div className='flex flex-row items-start gap-3 mt-2'>
       
        <button className='bg-blue-950 p-1 rounded-sm text-white' onClick={()=>handleSubmitSugg()}>انهاء </button>
      </div>
        
        
    </div>
  )
}

export default SuggForm