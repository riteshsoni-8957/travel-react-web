// import React from 'react'
import './home.scss'
import video from '../../Assets/homeVideo.mp4'
import { CiLocationOn } from "react-icons/ci";
import { FaFilter } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { CiCircleList } from "react-icons/ci";
import { FaTripadvisor } from "react-icons/fa";
import { TbApps } from "react-icons/tb";



function Home() {
  return (
    <section className="home">
      
      <video src={video} autoPlay loop muted></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span className="smallText">
            Our Packages
          </span>

          <h1 className="homeTitle">
            Search your <span>holiday</span>
          </h1>
        </div>

        <div className="cardDiv flex">
          
          <div className="destinationInput labelInput">
            <label htmlFor="city">Search your destination</label>

            <div className="input flex">
              <input type="text" id="city" placeholder='Enter name here...'/>
              <CiLocationOn className='icon'/>
            </div>
          </div>

          <div className="dateInput labelInput">
            <label htmlFor="date">Search your date:</label>

            <div className="input flex">
              <input type="date" id="date" />
            </div>
          </div>

          <div className="priceInput labelInput">
            <div className="labelTotal flex">
              <label className="labelTotal">Max price:</label>
              <h3 className='total'>$5000</h3>
            </div>

            <div className="input flex">
              <input type="range" id="price" min="1000" max="5000" />
            </div>
          </div>

          <div className="searchOption">
            <FaFilter className='icon'/>
            <span >MORE FILTER</span>
          </div>

        </div>

        <div className="homeFooterIcons flex">
          <div className="leftIcons flex">
            <BsFacebook className='icon'/>
            <FaInstagram className='icon'/>
            <CiCircleList className='icon'/>
          </div>

          <div className="rightIcons flex">
            <FaTripadvisor className='icon'/>
            <TbApps className='icon'/>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Home
