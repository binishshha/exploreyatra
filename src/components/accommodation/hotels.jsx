import { accommodationContent } from "./hotel.js";
import "./hotels.css";
import { FaMapPin } from "react-icons/fa6";

export default function Accommodation({ addToCart }) {
  return (
    <>
      <h2
        style={{
          marginTop: "30px",
          textAlign: "center",
        }}
      >
        PICK WHERE YOU WANNA STAY:
      </h2>
      <div className="hotel-container">
        {accommodationContent.map((place) => (
          <div key={place.id} className="hotel-card">
            <img src={place.image} alt={place.name} />
            <h1>{place.name}</h1>
            <p>
              <FaMapPin
                style={{
                  color: "red",
                }}
              />
              {place.location}
            </p>
            <p>{place.description}</p>
            <p className="p">
              ${place.price}/night
              <button className="book-button" onClick={() => addToCart(place)}>
                Book Now
              </button>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
