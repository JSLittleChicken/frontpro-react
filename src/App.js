import React, { useState } from "react";
import ContactsList from './components/ContactsList/ContactsList';
import AddContactForm from './components/AddContactForm/AddContactForm';
import './App.css';
// import data from "./contacts-data.json";
// I tried both local json and fetching from API

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const res = await response.json();
  return res;
}
const data = await getData();

const App = () => {

  const [contacts, setContacts] = useState(data.map(
    (c) => {
      return { id: c.id, name: c.name, phone: c.phone, username: c.username }
    }));

  function addContact(contact) {
    setContacts([...contacts, { ...contact, id: Math.max(...contacts.map(c => c.id)) + 1 }]);
  }

  return (
    <div className="App">
      <ContactsList contacts={contacts} updateContacts={setContacts} />
      <AddContactForm addContact={addContact} />
    </div>
  )
}

export default App;