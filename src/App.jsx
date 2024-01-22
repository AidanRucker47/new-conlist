import ContactList from "./components/ContactList";
import { useState } from "react";
import SelectedContact from "./components/SelectedContact";
import "./App.css";

function App() {
  const [selectedConId, setSelectedConId] = useState(null);
  return (
    <>
      {selectedConId ? (
        <>
          <SelectedContact selectedConId={selectedConId} />
        </>
      ) : (
        <ContactList setSelectedConId={setSelectedConId} />
      )}
    </>
  );
}

export default App;
