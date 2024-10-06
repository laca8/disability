import React from 'react'
import SearchSugg from '../components/suggList/SearchSugg'
import List from '../components/suggList/List'

const SuggestionList = () => {
  return (
    <div className='container'>
        <SearchSugg/>
        <List/>
    </div>
  )
}

export default SuggestionList