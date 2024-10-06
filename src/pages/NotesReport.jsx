import React from 'react'
import AddNotes from '../components/notesReport/AddNotes'
import ListNotes from '../components/lists/ListNotes'

const NotesReport = () => {
  return (
    <div className='container'>
    <div className='flex flex-row items-center justify-center text-center mt-10 mb-1'>
        <h1 className='text-center text-5xl font-bold mb-4'>متابعة البلاغ</h1>

    </div>
    <AddNotes/>
    <ListNotes/>
 


</div>
  )
}

export default NotesReport