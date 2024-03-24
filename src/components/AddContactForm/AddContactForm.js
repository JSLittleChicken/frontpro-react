import { Component } from "react";

class AddContactForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: { name: "", phone: "", username: "" },
            isFormVisible: false,
            isButtonVisible: true
        };

        this.handleCancelClick = this.handleCancelClick.bind(this);
        this.setFormData = this.setFormData.bind(this);
        this.setIsFormVisible = this.setIsFormVisible.bind(this);
        this.setIsButtonVisible = this.setIsButtonVisible.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    setFormData(data) {
        this.setState({
            formData: data
        })
    }

    setIsFormVisible(isVisible) {
        this.setState({
            isFormVisible: isVisible
        })
    }

    setIsButtonVisible(isVisible) {
        this.setState({
            isButtonVisible: isVisible
        })
    }


    handleSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        const contact = Object.fromEntries(data.entries());
        this.props.addContact(contact);
        this.setFormData({ name: "", phone: "", username: "" })
        this.setIsFormVisible(false);
        this.setIsButtonVisible(true);
    }

    handleCancelClick() {
        this.setFormData({ name: "", phone: "", username: "" })
        this.setIsFormVisible(false);
        this.setIsButtonVisible(true);
    }

    render () {
        return (
            <div>
                <button className={this.state.isButtonVisible ? '' : 'hidden'} onClick={() => {this.setIsButtonVisible(false); this.setIsFormVisible(true)}}>Add new contact</button>
                <div className={this.state.isFormVisible ? '' : 'hidden'}>
                    <h2>Add a new contact</h2>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            value={this.state.formData.name}
                            onChange={(e) => { this.setFormData({ ...this.state.formData, name: e.target.value }) }}
                            type="text" name="name" required={this.state.isFormVisible ? true : false} placeholder="enter your name"
                        />
                        <input
                            value={this.state.formData.username}
                            onChange={(e) => { this.setFormData({ ...this.state.formData, username: e.target.value }) }}
                            type="text" name="username" required={this.state.isFormVisible ? true : false} placeholder="enter your username"
                        />
                        <input
                            value={this.state.formData.phone}
                            onChange={(e) => { this.setFormData({ ...this.state.formData, phone: e.target.value }) }}
                            type="tel" name="phone" required={this.state.isFormVisible ? true : false} placeholder="enter your phone number" />
                        <button type="submit">Add</button>
                        <button onClick={this.handleCancelClick}>Cancel</button>
                    </form>
                </div>
            </div>
        )
    }
    
}

export default AddContactForm;