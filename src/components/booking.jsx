import React, { useEffect, useState } from "react";
import Accommodation from "./accommodation/hotels";

const Booking = () => {
 return(
    <>
<div className="description"
style={{
    margin: '10px',
}}>
    <h2>PICK WHERE YOU WANNA STAY:</h2>
</div>
  <Accommodation />
  </>
 )
};

export default Booking;
