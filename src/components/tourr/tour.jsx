import { content } from "./content.js";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../Footer";
import Booking from "../booking";

export default function Tour() {
  return (
    <>
      <div className="container">
        {content.map((place) => (
          <NavLink
            key={place.id}
            to={`booking/${place.name}`}
            className="card"
          >
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
