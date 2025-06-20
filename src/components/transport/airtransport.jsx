import { useState } from "react";
import { useParams } from "react-router";
import { initialInputs } from "../contactus/inputs";
import { BiTransferAlt } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import "./airtransport.css";

export default function Date() {
  const [formState, setFormState] = useState(initialInputs);
  const place = useParams();

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormState((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSearch = () => {
    const { source, destination, start, end, travellernum } = formState;

    if (!source || !destination || !start || !end || !travellernum) {
      alert("Please fill in all fields to search for flights.");
      return;
    }
    alert("No flights found.");
  };

  return (
    <>
      <div className="mainsec">
        <div className="form">
          <div>
            <select
              id="source"
              value={formState.source}
              onChange={handleChange}
            >
              <option value=""> From? </option>
              <option value="bharadpur">BHARADPUR</option>
              <option value="solukhumbu">SOLUKHUMBU</option>
              <option value="chitwan">CHITWAN</option>
              <option value="dhangadi">DHANGADI</option>
            </select>
          </div>
          <BiTransferAlt
            style={{
              color: "white",
              fontSize: "30px",
            }}
          />
          <div>
            <select
              id="destination"
              value={formState.destination}
              onChange={handleChange}
            >
              <option value="">Where to?</option>
              <option value="dest">{place.name.toUpperCase()}</option>
            </select>
          </div>
          <div>
            <label htmlFor="start">DEPARTURE DATE: </label>
            <input
              type="date"
              id="start"
              value={formState.start}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="start">RETURN DATE: </label>
            <input
              type="date"
              id="end"
              value={formState.end}
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              type="number"
              id="travellernum"
              placeholder="No. of travellers"
              value={formState.travellernum}
              onChange={handleChange}
            />
          </div>
          <FaSearch
            style={{
              color: "white",
              fontSize: "30px",
            }}
            onClick={handleSearch}
          />
        </div>
      </div>
    </>
  );
}
