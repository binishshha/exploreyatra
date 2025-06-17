import { accommodationContent } from "./hotel.js";
import './hotels.css';
import { FaMapPin } from "react-icons/fa6";

export default function Accommodation() {
  return (
    <>
      <div className="hotel-container">
        {accommodationContent.map((place) => (
          <div key={place.id} className="hotel-card">
            <img src={place.image} alt={place.name} />
            <h1>{place.name}</h1>
            <p><FaMapPin style={{
              color: 'red'
            }} />{place.location}</p>
            <p>{place.description}</p>
            <p className="p">{place.price}
              <button className="book-button">Book Now</button>
            </p>
            
          </div>
        ))}
      </div>
    </>
  );
}
