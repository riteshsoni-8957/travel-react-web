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
        {/* har page pe dikhega */}
        <NavBar/>   

          {/* first page pe dikhega */}
          <Routes>   
            <Route path="/" 
            element={
              <>
                <Home/>
                <Main/>
              </> 
            } 
          />

          {/* main page ke details pe click karne pe dikhega */}
          <Route path="/destination-details/:id" element={<DestinationDestils/>} />     
        </Routes>

            {/* har page pe dikhega */}
        <Footer/>    
      </HashRouter>
    </>
  )
}

export default App