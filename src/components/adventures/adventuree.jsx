import { adventure } from "./adventure.js";
import "./adventure.css";

export default function Activity({ addToCart }) {
  return (
    <>
      <div className="hero-adventure">
        <h1>CHOOSE ANY ADVENTURE SPORTS</h1>
        <div className="advnt-container">
          {adventure.map((sport) => (
            <div className="advnt-card" key={sport.id}>
              <img src={sport.image} alt={sport.name} />
              <h1>{sport.name}</h1>
              <h2>Duration: {sport.duration}</h2>
              <h3>
                ${sport.price}/person
                <button
                  className="book-button"
                  onClick={() => {
                    addToCart(sport);
                    alert(`${sport.name} has been added to your cart!`);
                  }}
                >
                  Book Now
                </button>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
