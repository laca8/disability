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

function App() {
  const [serv,setServ] = useState('')


  return (
    <>
      <Navbar serv={serv} setServ={setServ}/>
      <BrowserRouter>
      <Routes>
        <Route element={<Home serv={serv} setServ={setServ}/>} path='/'></Route>
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
