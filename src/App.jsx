import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Suggestions from './pages/Suggestions'
import Report from './pages/Report'
import Reports from './pages/Reports'
import ShowReport from './pages/ShowReport'
import NotesReport from './pages/NotesReport'
import SuggestionList from './pages/SuggestionList'
import AddNotesSugg from './components/suggList/NotesSugg'
import ShowSugg from './pages/ShowSugg'
import Create from './pages/Create'
import Disables from './pages/Disables'
import SuggDis from './pages/SuggDisables'

function App() {


  return (
    <>
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route element={<Home />} path='/'></Route>
        <Route element={<Disables />} path='/dis'></Route>
        <Route element={<SuggDis />} path='/suggDis'></Route>
        <Route element={<Suggestions/>} path='/suggestion'></Route>
        <Route element={<Report/>} path='/report'></Route>
        <Route element={<Reports/>} path='/reports'></Route>
        <Route element={<ShowReport/>} path='/show-report'></Route>
        <Route element={<NotesReport/>} path='/notes'></Route>
        <Route element={<AddNotesSugg/>} path='/notes-sugg'></Route>
        <Route element={<SuggestionList/>} path='/suggList'></Route>
        <Route element={<ShowSugg/>} path='/show-sugg'></Route>
        <Route element={<Create/>} path='/create'></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
