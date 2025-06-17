// inputs.js
export const initialInputs = {
  firstName: "",
  lastName: "",
  email: "",
  phonenumber: "",
  startDate: "",
  endDate: "",
  travellernum: "",
  ageIdentity: "[]",
  message: "",
};

export const stateinputs = "input";

// Save form state to localStorage
export const setlocalStorageItems = (formState) => {
  localStorage.setItem(stateinputs, JSON.stringify(formState)); 
};

// Get form state from localStorage or fallback to defaults
export const getlocalStorageItems = () => {
    const newinputs = localStorage.getItem(stateinputs);
    return newinputs ? JSON.parse(newinputs) : initialInputs;
};