import { useState } from 'react';

export default function Contact() {
    const initialInputs = {
        firstName: "",
        lastName: "",
        email: "",
        phonenumber: "",
        startDate: "",
        endDate: "",
        travellernum: "",
        ageIdentity: [],
        message: ""
    };

    const [formState, setFormState] = useState(initialInputs);

    const handleChange = (e) => {
        const { id, value, name, type, checked } = e.target;
            setFormState((prevData) => ({
                ...prevData,
                [id]: value
            }));
    };

    return (
        <>
            <form
              style={{
                    display:'flex',
                    flexDirection:'column',
                    justifySelf:'center',
                    marginTop: '5vw',
                    border:'1px solid black',
                    borderRadius:'20px',
                    padding:'20px',
                        backgroundColor:'#e3f2fd',  /* light blue background */
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}>
                <div className="form">

                    <div>
                        <label>Enter your First name:</label>
                        <input
                            type="text"
                            id="firstName"
                            value={formState.firstName}
                            placeholder="John"
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label>Enter your Last name:</label>
                        <input
                            type="text"
                            id="lastName"
                            value={formState.lastName}
                            placeholder="Doe"
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label>Enter your Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={formState.email}
                            placeholder="abc@gmail.com"
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label>Enter your Phone Number:</label>
                        <input
                            type="number"
                            id="phonenumber"
                            value={formState.phonenumber}
                            placeholder="+977-1111111111"
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label>Enter your Starting Date:</label>
                        <input
                            type="date"
                            id="startDate"
                            value={formState.startDate}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label>Enter your End Date:</label>
                        <input
                            type="date"
                            id="endDate"
                            value={formState.endDate}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label>Enter the no. of travellers:</label>
                        <input
                            type="number"
                            id="travellernum"
                            value={formState.travellernum}
                            placeholder="e.g. 2"
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label>Traveller's Age Identity:</label>
                       <label>
                                <input
                                    type="checkbox"
                                    name="ageIdentity"
                                    value="children"
                                    checked={formState.ageIdentity.includes("children")}
                                    onChange={handleChange}
                                />
                                Children
                            </label>
                        
                            <label>
                                <input
                                    type="checkbox"
                                    name="ageIdentity"
                                    value="adult"
                                    checked={formState.ageIdentity.includes("adult")}
                                    onChange={handleChange}
                                />
                                Adult
                            </label>
                  
                     
                            <label>
                                <input
                                    type="checkbox"
                                    name="ageIdentity"
                                    value="above60"
                                    checked={formState.ageIdentity.includes("above60")}
                                    onChange={handleChange}
                                />
                                Above 60
                            </label>
                    
                    </div>

                    <div>
                        <label>Enter your Message:</label>
                        <input
                            type="text"
                            id="message"
                            value={formState.message}
                            placeholder="Hello!"
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </>
    );
}
