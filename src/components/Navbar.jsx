import React,{useState} from 'react'

const Navbar = ({serv,setServ}) => {
    console.log(serv);
    
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
                <li>
                    <div className='relative serv'>
                    <button className='btn-serv'>ادارة الخدمات ^</button>
                    <ul className='list-serv   absolute bg-white top-9 rounded-sm  border-2 border-gray-400 w-40'>
                        <li className='li-serv border-b-2 p-1' onClick={()=>setServ('serv')}>تسجيل خدمة</li>
                        <li className='p-1' onClick={()=>setServ('sugg')}>
                     تسجيل استفسارات
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