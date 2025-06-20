import React, { useState } from "react";
import RoadTransport from "./roadtransport.jsx";
import AirTransport from "./airtransport.jsx";

export default function Dropdown() {
  const [transportMode, setTransportMode] = useState("");

  const handleChange = (e) => {
    setTransportMode(e.target.value);
  };

  return (
    <>
    <div className="menu"
    style={{
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      padding:'20px',
      gap: '20px',
      maxWidth: '1500px',
      margin:'0 auto'
    }}>
      <h4>Select your means of Transport:</h4>
      <div>
      <select value={transportMode} onChange={handleChange}>
        <option value="">--Choose an option--</option>
        <option value="Road">BY ROAD</option>
        <option value="Air">BY AIR</option>
      </select>
      </div>
</div>

<div>
      {transportMode === "Road" && <RoadTransport />}

      {transportMode === "Air" && <AirTransport />}

    </div>
    </>
  );
}
