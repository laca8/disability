import React from 'react'
import SuggForm from '../components/forms/SuggForm'

const Suggestions = () => {
  return (
    <div className='container'>
        <div className='flex flex-row items-center justify-center text-center mt-10'>
            <h1 className='text-center text-5xl font-bold mb-4'>استعلامات ومقترحات</h1>

        </div>
        <SuggForm/>


    </div>
  )
}

export default Suggestions