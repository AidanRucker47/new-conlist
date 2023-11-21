import React from "react";

export default function ContactsRow({ contact }) {
  return (
    <table>
      <thead>
        <tr>
          <td>{contact.name}</td>
          <td>{contact.email}</td>
          <td>{contact.phone}</td>
        </tr>
      </thead>
    </table>
  );
}
