
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminPage from './pages/AdminPage.jsx'
import LoginPage from './pages/loginPage.jsx'
import RegisterPage from './pages/registerPage.jsx'

function App() {
  

  return (
  
    <BrowserRouter>
     <div className="w-full h-screen bg-red-500">
      <Routes path="/">
        <Route path="/" element ={<h1>Home</h1>} />
        <Route path="/admin" element ={<AdminPage/>} />
        <Route path="/login" element ={<LoginPage/>} />
        <Route path="/register" element ={<RegisterPage/>} />
   
      </Routes>
      </div>
     </BrowserRouter>
  
  )
}

export default App
