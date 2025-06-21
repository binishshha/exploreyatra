import { content } from "./content.js";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../Footer";
import Booking from "../booking";
import tour from "./tour.jpg";
import "./tourr.css";

export default function Tour() {
  return (
    <>
      <div
        className="bgimage"
        style={{
          position: "relative",
          backgroundImage: `url(${tour})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "300px",
          opacity: "0.8",
        }}
      >
        <div
          className="section"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(0,0,0,0.5)",
            padding: "1rem 2rem",
            borderRadius: "10px",
            color: "white",
            textAlign: "center",
            opacity: "1",
          }}
        >
          <h1> EXPLORE VIBRANT CITIES OF NEPAL </h1>
        </div>
      </div>
      <div className="touring"
      style={{
        textAlign:'center',
        margin:'20px',
        display:'flex',
        flexDirection:'column',
        gap:'20px'
      }}>
        <p>
          Explore the Wonders of Nepal Discover Nepal’s vibrant culture, rich
          history, and breathtaking landscapes. Stroll through bustling markets,
          visit ancient temples, and unwind by peaceful lakes while experiencing
          the genuine warmth of Nepali hospitality. Every moment in Nepal is
          filled with unique stories and unforgettable memories.
        </p>
        <h1>CHOOSE WHERE YOU WANNA TOUR</h1>
      </div>
      <div className="container">
        {content.map((place) => (
          <NavLink key={place.id} to={`booking/${place.name}`} className="card">
            <img src={place.image} alt={place.name} />
            <h1>{place.name}</h1>
            <p>{place.description}</p>
          </NavLink>
        ))}
      </div>
      <Outlet />
      <Footer />
    </>
  );
}
