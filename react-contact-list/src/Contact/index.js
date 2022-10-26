import React from "react";
import List from "./List";
import Form from "./Form";
import { useState, useEffect } from "react";
import './style.css'


function Contact() {
  const [contact, setContact] = useState([
    { fullName: "Melih", phone: 123321 },
    { fullName: "Mehmet", phone: 852258 },
    { fullName: "Ali", phone: 598741 },
  ]);

  useEffect(() => {
    console.log(contact);
  }, [contact]);
  return (
    <div className="container">
      <h1>Contact List App</h1>
      <List contact={contact} />
      <Form contact={contact} setContact={setContact} />
    </div>
  );
}

export default Contact;
