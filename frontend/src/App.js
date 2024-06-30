import React from 'react'
import { Route,Routes } from 'react-router-dom'
import NoteForm from './components/NoteForm'
import Layout from './pages/Layout'
import NotesPage from './pages/NotesPage'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index  element={<NoteForm/>} />
        <Route path='/see' element={<NotesPage/>} />

        </Route>
      </Routes>
    </div>
  )
}

export default App
