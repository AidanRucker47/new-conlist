import React from "react";

export default function ContactsRow({ contact, setSelectedConId }) {
  return (
    <tr onClick={() => setSelectedConId(contact.id)}>
      <td id='rendered'>{contact.name}</td>
      <td id='rendered'>{contact.email}</td>
      <td id='rendered'>{contact.phone}</td>
    </tr>
  );
}
