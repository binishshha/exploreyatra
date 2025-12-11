import { HiOutlineMailOpen } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import  Contactform  from "./contactform.jsx";
import './contactus.css';
import  Footer  from "../Footer";

export default function Contact() {
  return (
    <>
      <div
        className="contact">
        <h1>CONTACT US AT</h1>
      </div>
      <div className="contact-info">
        <div
          className="email">
          <HiOutlineMailOpen style={{ fontSize: "30px" }} />
          <h4>exploreyteam@gmail.com</h4>
        </div>
        <div className="whatsapp">
          <FaWhatsapp style={{ fontSize: "30px" }} />
          <h3>977-7162182981</h3>
        </div>
        <div
          className="phone" >
          <FiPhoneCall style={{ fontSize: "30px" }} />
          <h3>01-7162182</h3>
          <h3>+977-967162182</h3>
        </div>
      </div>
    <Contactform />
    <Footer />
    </>
  );
}
