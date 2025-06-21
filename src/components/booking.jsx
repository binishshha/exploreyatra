import React, { useEffect, useState } from "react";
import Accommodation from "./accommodation/hotels";
import { useParams } from "react-router";
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
         width:'100%',
          padding:'20px',
          backgroundColor:"rgb(92, 98, 105)",
          position:"sticky",
          zIndex:'99',
          top:'0'
        }}
      >
        <h1>Customize your trip to {place.name}</h1>
      </div>
      <Calculation />
    </>
  );
};

export default Booking;
