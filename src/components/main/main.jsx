// import React from 'react'
import './main.css'

// imports data file
import Data from './data'

// import icons
import { CiLocationOn } from "react-icons/ci";
import { GrNotes } from "react-icons/gr";


function Main() {
  return (
    <section className="main container section">

      <div className="secTitle">
        <h3 className='title'>Most visited destination</h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(function ({id, imgSrc, destTitle, location, grade, fees, description}) {
            return (
              <div key={id} className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo flex">
                  <h4 className="destTitle">
                    {destTitle}
                  </h4>

                  <span className="location flex">
                    <CiLocationOn className='icon'/>
                    {location}
                  </span>

                  <div className="grade flex">
                    <span className='flex'>
                      {grade} 
                      <small>+1</small>
                    </span>
                    <b>{fees}</b>
                  </div>

                  <div className="description">
                    {description}
                  </div>

                  <div className="detailsBtn">
                    <button className='btn flex'>
                      Details
                      <GrNotes className="icon"/>
                    </button>
                  </div>
                </div>
              </div>
            )
          })
        }
        
      </div>

    </section>
  )
}

export default Main
