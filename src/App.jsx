import { Route, Routes } from "react-router";
import NavBar  from "./components/navbar";
import Home  from "./components/home";
import AboutUs from "./components/aboutus";
import Dest from "./components/destinations";
import Trek from "./components/trekk/trek";
import Tour from "./components/tourr/tour";
import Contact from "./components/contactus";

function App() {
return (
    <>
  <NavBar />
     <Routes>
      <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          
          <Route path="/destinations" element={<Dest />} >
          <Route path="tour" element={<Tour />} />
          <Route path="trek" element={<Trek />} />
          </Route>

          <Route path="/tour" element={<Tour />} />
          <Route path="/trek" element={<Trek />} />
          <Route path="/contactus" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App;
