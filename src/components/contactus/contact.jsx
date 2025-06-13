import Form from "./form.jsx";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";

export default function Contact() {
  return (
    <>
      <div
        className="contact"
        style={{
          justifyItems: "center",
          margin: "20px",
        }}
      >
        <h1>CONTACT US AT</h1>
      </div>
      <div
        className="contact-info"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 3fr)",
          justifySelf: "center",
          gap: "40px",
          margin: "30px",
          width: "60%",
           maxWidth: "1000px",
        
        }}
      >
        <div
          className="email"
          style={{
            border: "1px solid black",
            width: "100%",
            padding: "20px",
            justifyItems: "center",
            justifyContent: "spaceAround",
          }}
        >
          <HiOutlineMailOpen style={{ fontSize: "30px" }} />
          <h4>exploreyteam@gmail.com</h4>
        </div>
        <div
          className="whatsapp"
          style={{
            border: "1px solid black",
            width: "100%",
            padding: "20px",
            justifyItems: "center",
          }}
        >
          <FaWhatsapp style={{ fontSize: "30px" }} />
          <h3>977-7162182981</h3>
        </div>
        <div
          className="phone"
          style={{
            border: "1px solid black",
            width: "100%",
            padding: "20px",
            justifyItems: "center",
          }}
        >
          <FiPhoneCall style={{ fontSize: "30px" }} />
          <h3>01-7162182</h3>
          <h3>+977-967162182</h3>
        </div>
      </div>
      <Form />
    </>
  );
}
