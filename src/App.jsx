import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/navbar";
import Home from "./components/home/home";
import AboutUs from "./components/aboutus";
import Trek from "./components/trekk/trek";
import Tour from "./components/tourr/tour";
import Contact from "./components/contactus/contact";
import Booking from "./components/booking";

function App() {
  return (
    <>
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/trek" element={<Trek />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="booking/:name" element={<Booking />} />
        </Route>
          <Route path="/tour/booking/:name" element={<Booking />} />
      </Routes>

    
    </>
  );
}

export default App;
