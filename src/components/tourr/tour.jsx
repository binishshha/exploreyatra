import { content } from "./content.js";
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Footer from "../Footer";
import Booking from "../booking";
import tour from "./tour.jpg";
import "./tourr.css";

export default function Tour() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState(content);

  const handleSearch = () => {
    const filtered = content.filter((place) =>
      place.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredResults(filtered);
  };

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
          <h1>EXPLORE VIBRANT CITIES OF NEPAL</h1>
        </div>
      </div>

      {/* Search Bar */}
      <div
        className="searchbar"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "20px auto",
          padding: "8px 12px",
          gap: "10px",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          width: "90%",
          maxWidth: "400px",
        }}
      >
        <input
          type="search"
          placeholder="Search a city..."
          id="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            border: "none",
            outline: "none",
            fontSize: "16px",
            padding: "10px",
            borderRadius: "6px",
            backgroundColor: "#f4f4f4",
            width: "100%",
          }}
        />
        <div
          className="searchicon"
          style={{
            color: "#333",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={handleSearch}
        >
          <FaSearch style={{ fontSize: "22px" }} />
        </div>
      </div>

      <div
        className="touring"
        style={{
          textAlign: "center",
          margin: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <p>
          Explore the Wonders of Nepal. Discover Nepal’s vibrant culture, rich
          history, and breathtaking landscapes. Stroll through bustling markets,
          visit ancient temples, and unwind by peaceful lakes while experiencing
          the genuine warmth of Nepali hospitality. Every moment in Nepal is
          filled with unique stories and unforgettable memories.
        </p>
        <h1>CHOOSE WHERE YOU WANNA TOUR</h1>
      </div>

      <div className="container">
        {filteredResults.length > 0 ? (
          filteredResults.map((place) => (
            <NavLink
              key={place.id}
              to={`booking/${place.name}`}
              className="card"
            >
              <img src={place.image} alt={place.name} />
              <h1>{place.name}</h1>
              <p>{place.description}</p>
            </NavLink>
          ))
        ) : (
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            No matching cities found.
          </p>
        )}
      </div>

      <Outlet />
      <Footer />
    </>
  );
}
