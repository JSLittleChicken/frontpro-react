
import { useState } from "react";

const AddContactForm = (props) => {

    const [formData, setFormData] = useState({ name: "", phone: "", username: "" });
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [isButtonVisible, setIsButtonVisible] = useState(true);

    function handleSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        const contact = Object.fromEntries(data.entries());
        props.addContact(contact);
        setFormData({ name: "", phone: "", username: "" })
        setIsFormVisible(false);
        setIsButtonVisible(true);
    }

    function handleCancelClick() {
        setFormData({ name: "", phone: "", username: "" })
        setIsFormVisible(false);
        setIsButtonVisible(true);
    }

    return (
        <div>
            <button className={isButtonVisible ? '' : 'hidden'} onClick={() => {setIsButtonVisible(false); setIsFormVisible(true)}}>Add new contact</button>
            <div className={isFormVisible ? '' : 'hidden'}>
                <h2>Add a new contact</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        value={formData.name}
                        onChange={(e) => { setFormData({ ...formData, name: e.target.value }) }}
                        type="text" name="name" required="required" placeholder="enter your name"
                    />
                    <input
                        value={formData.username}
                        onChange={(e) => { setFormData({ ...formData, username: e.target.value }) }}
                        type="text" name="username" required="required" placeholder="enter your username"
                    />
                    <input
                        value={formData.phone}
                        onChange={(e) => { setFormData({ ...formData, phone: e.target.value }) }}
                        type="tel" name="phone" required="required" placeholder="enter your phone number" />
                    <button type="submit">Add</button>
                    <button onClick={handleCancelClick}>Cancel</button>
                </form>
            </div>
        </div>
    )
}

export default AddContactForm;