import React from 'react'
import {useNavigate} from 'react-router-dom'
const List = () => {
    const navigator = useNavigate()
    const clickToShowSugg = ()=>{
        navigator('/show-sugg')
    }
  return (
<div className="overflow-x-auto shadow-md sm:rounded-lg font-bold ">
    <table className="w-full text-sm text-right text-gray-500  mt-10 bg-blue-900 border-2 border-gray-400">
        <thead className="text-xs text-black uppercase  bg-gray-400 ">
            <tr>
                <th scope="col" className="px-6 py-3">
                    اسم المتصل
                </th>
                <th scope="col" className="px-6 py-3">
                    رقم التليفون
                </th>
                <th scope="col" className="px-6 py-3">
                    تاريخ المكالمة
                </th>
                <th scope="col" className="px-6 py-3">
                   #
                </th>
            </tr>
        </thead>
        <tbody className='bg-zinc-100 text-gray-700 '>
            <tr className=" border-b  hover:bg-gray-700 hover:text-zinc-100">
                <td className="px-6 py-4">
                 محمد
                </td>
                <td className="px-6 py-4">
                 01255467
                </td>
                <td className="px-6 py-4">
                03/10/2024
                </td>
                <td className="px-6 py-4 text-right ">
                   
                    <button  className="font-medium text-white bg-blue-900 p-1 m-1" onClick={()=>clickToShowSugg()}>عرض</button>
                </td>
            </tr>
            
        </tbody>
    </table>
</div>

  )
}

export default List