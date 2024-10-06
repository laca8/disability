import React,{useState} from 'react'

const Navbar = () => {
    const [selectedValue, setSelectedValue] = useState(false); 
    const handleChange = (event) => {
        setSelectedValue(!selectedValue)
     };
    
  return (
    <nav className=' w-full h-full bg-gray-400 shadow-sm shadow-black' >
    <div className='container'>
        <div className=' flex flex-row gap-8'>
            <div className=''>
                <a href='/'>
               <img className='w-12 h-12'  src='https://hrightsstudies.sis.gov.eg/media/1387/%D8%B0%D9%88%D9%8A-%D8%A7%D9%84%D8%A7%D8%B9%D8%A7%D9%82%D8%A9.png' />
                </a>
            </div>
            <ul className='flex flex-row  items-center gap-5 cursor-pointer '>
                <li className='relative'>
                    
<button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" onClick={()=>{handleChange()}} className="w-32" type="button">ادارة الخدمات^
</button>


<div  className={`z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44  ${selectedValue ? 'visible' : 'invisible'} `}>
    <ul className="p-1 text-sm text-gray-900 " aria-labelledby="dropdownDefaultButton">
      <li onClick={()=>{handleChange()}}>
        <a href="/dis" className="block p-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">تسجيل خدمات</a>
      </li>
      <li onClick={()=>{handleChange()}}>
        <a href="/suggDis" className="block p-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">تسجيل استفسارات</a>
      </li>
     
    </ul>
</div>
                </li>
                
                
            <li className='hover:border-b-2 border-black'>
                <a href='/reports'>البلاغات</a>
            </li>
            <li className='hover:border-b-2 border-black'>
                <a>ادارة البلاغات</a>
            </li>
            <li className='hover:border-b-2 border-black'>
                <a href='/notes'>متابعة البلاغات</a>
            </li>
            <li className='hover:border-b-2 border-black'>
                <a href='/suggList'>الاستعلامات</a>
            </li>
            
            </ul>
    
    </div>

    </div>
 </nav>
  )
}

export default Navbar