// import React from 'react'
import './footer.css'
import video from '../../Assets/footerVideo.mp4'

// imports icon
import { MdTravelExplore } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";

import { TbMathGreater } from "react-icons/tb";


// imports icon
import { IoMdSend } from "react-icons/io";

function Footer() {
  return (
    <section className="footer">
      <video src={video} autoPlay loop muted></video>

      <div className="secContent container">
        <div className="contentDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input type="text" placeholder='Enter Email Address'/>

            <button className="btn flex">
              SEND <IoMdSend className='icon'/>
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          {/* footer Intro */}
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
                <MdTravelExplore /> Travel
              </a>
            </div>

            <div className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi maiores aliquid laudantium laborum, itaque aut ut, voluptas eum aspernatur neque, expedita voluptates! Sapiente consequatur aperiam debitis laboriosam assumenda odio obcaecati? Inventore iste error optio vel, minus incidunt nihil rem ut.
            </div>

            <div className="footerSocials flex">
                <FaTwitter className='icon'/>
                <FaYoutube className='icon'/>
                <FaInstagram className='icon'/>
                <FaTripadvisor className='icon'/>
            </div>
          </div>

          {/* footer Links */}
          <div className="footerLinks grid">
            {/* group 1 */}
            <div className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>

              <li className="footerList flex">
                <TbMathGreater className='icon'/> 
                Services
              </li>

              <li className="footerList flex">
                <TbMathGreater className='icon'/> 
                Insurance
              </li>

              <li className="footerList flex">
                <TbMathGreater className='icon'/> 
                Agency
              </li>

              <li className="footerList flex">
                <TbMathGreater className='icon'/> 
                Tourism
              </li>

              <li className="footerList flex">
                <TbMathGreater className='icon'/> 
                Payment
              </li>
            </div>

            {/* grooup 2 */}
            <div className="linkGroup">
              <span className="groupTitle">
                PARTNERS
              </span>

              <li className="footerList flex">
                <TbMathGreater className='icon'/> 
                Bookings 
              </li>

              <li className="footerList flex">
                <TbMathGreater className='icon'/> 
                Rentcars 
              </li>

              <li className="footerList flex">
                <TbMathGreater className='icon'/> 
                HostelWorlds 
              </li>

              <li className="footerList flex">
                <TbMathGreater className='icon'/> 
                trivago 
              </li>

              <li className="footerList flex">
                <TbMathGreater className='icon'/> 
                TripAdvisor 
              </li>
            </div>

            {/* group 3 */}
            <div className="linkGroup">
              <span className="groupTitle">
                LAST MINUTE
              </span>

              <li className="footerList flex">
                <TbMathGreater className='icon'/> 
                London 
              </li>

              <li className="footerList flex">
                <TbMathGreater className='icon'/> 
                Indonesia 
              </li>

              <li className="footerList flex">
                <TbMathGreater className='icon'/> 
                Europe 
              </li>

              <li className="footerList flex">
                <TbMathGreater className='icon'/> 
                trivago 
              </li>

              <li className="footerList flex">
                <TbMathGreater className='icon'/> 
                Oceanea 
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED - TRAVEL 2026</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
