import { Component } from "react";

class ContactsList extends Component {

    constructor(props) {
        super(props);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    handleDeleteClick(contactId) {
        this.props.updateContacts(this.props.contacts.filter(
            contact => contact.id !== contactId
        ));
    }

    render() {
        return(
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Phone number</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.contacts && this.props.contacts.map((contact, index) => (
                        <tr key={index}>
                            <td>{contact.name}</td>
                            <td>{contact.username}</td>
                            <td>{contact.phone}</td>
                            <td>
                                <button type="button" onClick={() => this.handleDeleteClick(contact.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }

}

export default ContactsList;