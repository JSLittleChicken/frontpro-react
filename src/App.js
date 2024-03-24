import React from "react";
import ContactsList from './components/ContactsList/ContactsList';
import AddContactForm from './components/AddContactForm/AddContactForm';
import './App.css';
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: []
    }
    this.addContact = this.addContact.bind(this)
    this.setContacts = this.setContacts.bind(this)
  }

  addContact(contact) {
    if (contact.name && contact.phone && contact.username) {
      this.setState({ contacts: [...this.state.contacts, { ...contact, id: Math.max(...this.state.contacts.map(c => c.id)) + 1 }] });
    }
  }

  setContacts(cList) {
    this.setState({
      contacts: cList
    })
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => this.setState(
        { contacts: data.map((c) => { return { id: c.id, name: c.name, phone: c.phone, username: c.username } }) }
      ))
  }

  render() {
    return (
      <div className="App">
        <ContactsList contacts={this.state.contacts} updateContacts={this.setContacts} />
        <AddContactForm addContact={this.addContact} />
      </div>
    )
  }
}

export default App;