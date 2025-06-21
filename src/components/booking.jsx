import React, { useEffect, useState } from "react";
import Accommodation from "./accommodation/hotels";
import { useParams } from "react-router";
import Transport from "./transport/transport";
import Calculation from "./calculation";

const Booking = () => {
  const place = useParams();
  return (
    <>
      <div
        className="header"
        style={{
          margin: "0 auto",
          textAlign: "center",
          maxWidth: "1500px",
          padding:'20px',
          backgroundColor:'gray',
          position:"sticky",
          zIndex:'99',
          top:'0'
        }}
      >
        <h1>Customize your trip to {place.name}</h1>
      </div>
      <Transport />
      <Calculation />
    </>
  );
};

export default Booking;
