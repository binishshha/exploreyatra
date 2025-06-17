import { initialInputs, getlocalStorageItems,setlocalStorageItems } from "./inputs.js";
import { useState, useEffect } from "react";
import "./contactus.css";

export default function Contactform() {

const [formState, setFormState] = useState(() => getlocalStorageItems());

useEffect(() => {setlocalStorageItems(formState)}, [formState]);

const handleChange = (e) => {
    const { id, value } = e.target;
    setFormState((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formState);
  };

  return (
    <>
      <h1 style={{ justifySelf: "center", textAlign: "center" }}>
        TO CONTACT IMMEDIATELY
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="form-main">
          <div className="frow">
            <div>
              <label>First name:</label>
              <input
                type="text"
                id="firstName"
                value={formState.firstName}
                placeholder="John"
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Last name:</label>
              <input
                type="text"
                id="lastName"
                value={formState.lastName}
                placeholder="Doe"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="srow">
            <div>
              <label>Email-address:</label>
              <input
                type="email"
                id="email"
                value={formState.email}
                placeholder="abc@gmail.com"
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Phone Number:</label>
              <input
                type="number"
                id="phonenumber"
                value={formState.phonenumber}
                placeholder="+977-1111111111"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="message">
            <label>Enter your Message:</label>
            <input
              type="text"
              id="message"
              value={formState.message}
              placeholder="Hello!"
              onChange={handleChange}
            />
          </div>

          <div className="butonn">
            <button type="submit">Submit</button>
            <button type="inquire">Inquire* </button>
          </div>
        </div>
      </form>
    </>
  );
}
