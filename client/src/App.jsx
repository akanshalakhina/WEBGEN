import React from 'react'
import {BrowserRouter,Route, Routes} from "react-router-dom"
import Home from './pages/home'
import useGetCurrentUser from './hooks/useGetCurrentUser'
export const serverUrl="http://localhost:8000"
function App() {
  useGetCurrentUser() //to fetch current user data when app component mounts
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>


    </Routes>
      
    </BrowserRouter>
  )
}

export default App
