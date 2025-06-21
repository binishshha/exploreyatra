import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/navbar";
import Home from "./components/home/home";
import AboutUs from "./components/aboutus";
import Tour from "./components/tourr/tour";
import Contact from "./components/contactus/contact";
import Booking from "./components/booking";
import Calculation from "./components/calculation";

function App() {
  return (
    <>
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/tour" element={<Tour />} />

        </Route>
          <Route path="/tour/booking/:name" element={<Booking />} >
          <Route path="tour/booking/:name/cart" element={<Calculation/>}/>
          </Route>
      </Routes>

    
    </>
  );
}

export default App;
