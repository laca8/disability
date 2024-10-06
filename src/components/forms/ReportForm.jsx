import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import data from '../../data.json'

const ReportForm = () => {
  const x = JSON.stringify(data)
  const y = JSON.parse(x)
  //console.log(x);
  
  
  
  const cities =[]
  console.log(cities);
  
  const [dats,setDats] = useState(y.filter((v,i,a)=>a.findIndex(v2=>(v["المحافظة"] === v2["المحافظة"]))===i))
  const navigator = useNavigate()
  const [name,setName] = useState('')
  const [phone,setPhone] = useState('')
  const [city,setCity] = useState('')
  const [place,setPlace] = useState('')
  const [shiek,setShiek] = useState('')
  const [type,setType] = useState('')

  const [id,setId] = useState('')
  const [dis,setDis] = useState('')
  const [reason,setReason] = useState('')
  const [report,setReport] = useState('')
  const [age,setAge] = useState('')
  const [side,setSide] = useState('')
  const handleSubmitReport = ()=>{
    const connector = JSON.parse(localStorage.getItem('connector'))
    console.log(connector); 

    const disabl ={
       name,
       phone,
       city,
       place,
       type,
     connName:connector.connName,
     connCity:connector.connCity,
     connId:connector.connId,
     connJop:connector.connJop,
     connPhone:connector.connPhone,
     connPlace:connector.connPlace,
     connRelation:connector.connRelation,
     connType:connector.connType,
     connAge:connector.connAge,
       id,
       dis,
       reason,
       report,
       age,
       side
      
    }
     console.log(disabl);
     
    navigator('/reports')

  }
  return (
    <div className=' mt-10 font-bold'>

        <div className='border-2 border-gray-400'> 
          <p className='bg-gray-100 p-1 text-center'>  بيانات البلاغ</p>

         <div className='grid grid-cols-4 max-sm:grid-cols-1 justify-evenly  text-right p-3 '>
         <div className='flex flex-col w-auto  p-1'>
            <label>اسم الحالة</label>
            <input className='bg-gray-100 p-1 rounded-sm border-2 border-gray-400' value={name} onChange={(e)=>setName(e.target.value)} type='text' placeholder='ادخل الاسم'  />
          </div>
          <div className='flex flex-col  w-auto p-1'>
          <label>نوع الاعاقة<span className='text-red-700'>*</span></label>
            <select id="countries" className="bg-gray-100 p-1 rounded-sm w-full border-2 border-gray-400" value={dis} onChange={(e)=>setDis(e.target.value)}>
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
            <input className='bg-gray-100 p-1 rounded-sm border-2 border-gray-400' value={reason} onChange={(e)=>setReason(e.target.value)} type='text' placeholder='ادخل سبب الاعاقة'  />
          </div>
          <div className='flex flex-col  w-auto p-1'>
          <label>جهة البلاغ<span className='text-red-700'>*</span></label>
            <select id="countries" className="bg-gray-100 p-1 rounded-sm w-full border-2 border-gray-400" value={side} onChange={(e)=>setSide(e.target.value)}>
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
            <input className='bg-gray-100 p-1 rounded-sm border-2 border-gray-400' value={phone} onChange={(e)=>setPhone(e.target.value)} type='number' placeholder='ادخل رقم التليفون' />
          </div>
          <div className='flex flex-col w-auto p-1'>
            <label>تاريخ الميلاد</label>
            <input className='bg-gray-100 p-1 rounded-sm border-2 border-gray-400' value={age} onChange={(e)=>setAge(e.target.value)} type='text' placeholder='ادخل تاريخ الميلاد ' />
          </div>
          <div className='flex flex-col  w-auto p-1'>
            <label>المحافظة <span className='text-red-700'>*</span></label>
           
            <select id="countries" className="bg-gray-100 p-1 rounded-sm border-2 border-gray-400"value={city} onChange={(e)=>setCity(e.target.value)}  >
              <option selected >اختر المحافظة </option>
           {
            dats &&dats?.map((x,i)=>(
              <option key={i}>{x['المحافظة']}</option>
            ))
           }
            </select>
          </div>
          <div className='flex flex-col  w-auto p-1'>
            <label>المركز/الحي<span className='text-red-700'>*</span></label>
            <select  disabled={!city} id="countries" className="bg-gray-100 p-1 rounded-sm border-2 border-gray-400" placeholder='ادخل المركز/الحي' value={place} onChange={(e)=>setPlace(e.target.value)}  >
              <option selected >اختر الحي </option>
           {
           city && y&&y.filter((x,i)=> x['المحافظة']  == city).filter((v,i,a)=>a.findIndex(v2=>(v["الحي"] === v2["الحي"]))===i)?.map((x,i)=>(
              <option key={i}>{x['الحي']}</option>
            
            
            ))
           }
            </select>
        
          </div>
          <div className='flex flex-col  w-auto p-1'>
            <label>القرية/الشياخة<span className='text-red-700'>*</span></label>
            <select  disabled={!place} id="countries" className="bg-gray-100 p-1 rounded-sm border-2 border-gray-400" placeholder='ادخل القرية/الشياخة' value={shiek} onChange={(e)=>setShiek(e.target.value)}  >
              <option selected >اختر الشياخة </option>
           {
          place && y && y?.filter((x,i)=> x['الحي']  == place && x['المحافظة']  == city)?.map((x,i)=>(
              <option key={i}>{x['الشياخة']}</option>
            
            
            ))
           }
            </select>
        
          </div>
          <div className='flex flex-col w-auto p-1'>
            <label>النوع<span className='text-red-700'>*</span></label>
            <input className='bg-gray-100 p-1 rounded-sm border-2 border-gray-400' value={type} onChange={(e)=>setType(e.target.value)} type='text' placeholder='ادخل النوع' />
          </div>
          <div className='flex flex-col w-auto p-1'>
            <label>الرقم القومي</label>
            <input className='bg-gray-100 p-1 rounded-sm border-2 border-gray-400' value={id} onChange={(e)=>setId(e.target.value)} type='text' placeholder='ادخل الرقم القومي' />
          </div>
         </div>


         <div className='flex flex-col p-3 text-right '>
            <label>تفاصيل البلاغ</label>
            <textarea id="message" rows="4" className="bg-gray-100  rounded-sm w-full border-2 border-gray-400" value={report} onChange={(e)=>setReport(e.target.value)} ></textarea>
          </div>
        </div>
        <div className='flex flex-row items-start gap-3 mt-2'>
       
        <button className='bg-blue-950 p-1 rounded-sm text-white' onClick={()=>handleSubmitReport()}>انهاء </button>
      </div>
        
        
    </div>
  )
}

export default ReportForm