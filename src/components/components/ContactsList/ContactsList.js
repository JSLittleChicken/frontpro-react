const ContactsList = (props) => {

    function handleDeleteClick(contactId) {
        props.updateContacts(props.contacts.filter(
            contact => contact.id !== contactId
        ));
    }

    return (
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
                {props.contacts && props.contacts.map((contact, index) => (
                    <tr key={index}>
                        <td>{contact.name}</td>
                        <td>{contact.username}</td>
                        <td>{contact.phone}</td>
                        <td>
                            <button type="button" onClick={() => handleDeleteClick(contact.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ContactsList;