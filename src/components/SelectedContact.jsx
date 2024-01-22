import React, { useState } from "react";
import { useEffect } from "react";

export default function SelectedContact({ selectedConId }) {
  const [contact, setContact] = useState("");
  useEffect(() => {
    fetch(
      `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedConId}`
    )
      .then((res) => res.json())
      .then((json) => {
        setContact(json);
      })
      .catch((error) => console.log(error));
  });
  return (
    <div id='single'>
      <h3>Contact Information for {contact?.name}</h3>
      <p>Name: {contact?.name}</p>
      <p>phone: {contact?.phone}</p>
      <p>email: {contact?.email}</p>
      <button onClick={(e) => setContact(null)}>Return</button>
    </div>
  );
}
