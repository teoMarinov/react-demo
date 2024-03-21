import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from './components/Login';
import { Landing } from './components/Landing';
import { Home } from './components/Home';
import { Page1 } from './components/Page1';
import { Navbar } from './components/Navbar';
import { Button } from "./components/Button"
function App() { //Roditel

  // const [userData, setUserData] = useState('');
  // console.log("🚀 ~ App ~ userData:", userData)


  //Create state color with initial value blue 
  // and the function setColor to change the state
  const [color, setColor] = useState('blue')


  return (
    <>
      <h1>{color}</h1>

    {/* We pass the function setColor to the prop changeColor
        We are making the prop changeColor to be the same as setColor */}
      <Button changeColor={setColor} /> {/* Dete */}

      <button onClick={() => setColor('red')}>change color</button>
      {/* <BrowserRouter>


        <Navbar userData={userData} />

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
      </BrowserRouter> */}
    </>
  )
}

export default App
