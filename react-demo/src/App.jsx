import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from './components/Login';
import { Landing } from './components/Landing';
import { Home } from './components/Home';
import { Page1 } from './components/Page1';
import { Navbar } from './components/Navbar';

function App() {

  const [userData, setUserData] = useState('');
  console.log("🚀 ~ App ~ userData:", userData)


  return (
    <>
      <BrowserRouter>
    <Navbar userData={userData}/>
      
        <Routes>
          {
            userData ? (
              <>
                <Route path='/' element={<Home userData={userData} />} />
                <Route path='/page1' element={<Page1 />} />
              </>
            ) : (
              <>
                <Route path='/' element={<Landing />} />
                <Route path="/*" element={<Login setUserDataLogin={setUserData} />} />
                <Route path="/login" element={<Login setUserDataLogin={setUserData} />} />
              </>
            )
          }

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
