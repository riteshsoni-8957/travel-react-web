// import React from 'react'
import './navbar.css'
// imports for icon
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { PiDotsNineBold } from "react-icons/pi";


let navbar = document.querySelector('.navBar');
function showNavBar() {
  navbar.style.top = "90px";
}

function hideNavBar() {
  navbar.style.top = "-1000px";
}

function NavBar() {
  return (
    <section className="navBarSection flex">
      <header className="header flex">
        <div className="logoDiv flex">
          <a href="" className='logo'>
            <h1> 
              <MdOutlineTravelExplore className="icon"/>
              Travel.
            </h1>
          </a>
        </div>

        <nav className="navBar">
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">Home</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Packages</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Shop</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">About</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Pages</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">News</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Contact</a>
            </li>

            <button className="btn">
              <a href="#">Book Now</a>
            </button>
          </ul>
          
          <div className="closeNavBar" onClick={hideNavBar}>
            <IoIosCloseCircle className="icon"/>
          </div>
        </nav>

        <div className="toggleNavBar" onClick={showNavBar}>
          <PiDotsNineBold className="icon"/>
        </div>
      </header>
    </section>
  )
}

export default NavBar