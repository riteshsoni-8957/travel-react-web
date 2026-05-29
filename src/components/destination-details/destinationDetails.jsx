import { useParams } from "react-router-dom";
import './destinationDetails.css'

// import data file
import Data from '../main/data'


function DestinationDetails() {
  const { id } = useParams();

  const destination = Data.find(
    item => item.id === Number(id)
  );

  return (
    <div className="destination-details">
      <div className="destination-card">
        <img src={destination.imgSrc} alt={destination.destTitle} />

        <div className="destination-content">
          <h1>{destination.destTitle}</h1>

          <p>{destination.description}</p>
        </div>
      </div>
    </div>
  );
}

export default DestinationDetails;