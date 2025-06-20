import React, { useEffect, useState } from "react";
import Accommodation from "./accommodation/hotels";
import { useParams } from "react-router";
import Transport  from "./transport/transport";
import Calculation from "./calculation";

const Booking = () => {
  const place = useParams();
  return (
    <>
      <h1
      style={{
        margin:'0 auto',
        textAlign:'center',
        maxWidth:'1500px'
      }}>Customize your trip to {place.name}</h1>
       <Transport />
      <Calculation />
    </>
  );
};

export default Booking;
