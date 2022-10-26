import React from "react";
import { useState, useEffect } from "react";


const formElements = { fullName: "", phone: "" }
function Form({ contact, setContact }) {
  const [person, setPerson] = useState(formElements);
  const addList = (e) => {
    if (person.fullName === "" || person.phone === "") {
      return false
    }
    setContact([...contact, person]);
    /* setPerson({ fullName: "", phone: "", });    1.Yöntem*/
    setPerson(formElements);
  };
  useEffect(() => {
    setPerson(formElements);
  }, [contact]);
  const onChangePerson = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };
  return (
    <div className="Form">
      <hr />
      <h1>Form</h1>
      <input placeholder="Name and surname" name="fullName" value={person.fullName} onChange={onChangePerson} />
      <br />
      <input placeholder="Telephone Number" name="phone" value={person.phone} onChange={onChangePerson} />
      <br />
      <button onClick={addList}>Add</button>
      <br />
      <div>Person: {person.fullName} {person.phone} </div>
    </div>
  );
}



export default Form;