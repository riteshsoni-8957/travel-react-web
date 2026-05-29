// import React from 'react'
import './app.css'
import NavBar from './components/navbar/navbar.jsx'
import Home from './components/home/home.jsx'
import Main from './components/main/main.jsx'
import Footer from './components/footer/footer.jsx'
import DestinationDestils from './components/destination-details/destinationDetails.jsx'

import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <>
      <HashRouter>
        <NavBar/>   // har page pe dikhega

          <Routes>    // first page pe dikhega
            <Route path="/" 
            element={
              <>
                <Home/>
                <Main/>
              </> 
            } 
          />
          
          <Route path="/destination-details/:id" element={<DestinationDestils/>} />    // main page ke details pe click karne pe dikhega
        </Routes>

        <Footer/>    // har page pe dikhega
      </HashRouter>
    </>
  )
}

export default App