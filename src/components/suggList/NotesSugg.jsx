import React,{useState} from 'react'

const AddNotesSugg = () => {
const [note,setNote] = useState('')
const addNote = ()=>{
   console.log(note)
}
  return (
    <div className='container'>
         <div className='flex flex-col p-3 text-right '>
            <label>المتابعة</label>
            <textarea id="message" rows="4" className="bg-gray-100  rounded-sm w-full border-2 border-gray-400"  value={note} onChange={()=>setNote()}></textarea>
          </div>
        <div className='flex flex-row items-start gap-3 '>
       
        <button className='bg-green-800 p-2 rounded-sm text-white mr-3' onClick={()=>addNote()}>اضف المتابعة </button>
      </div>
    </div>
  )
}

export default AddNotesSugg