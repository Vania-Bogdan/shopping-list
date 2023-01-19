import React from "react";

class AddForm extends React.Component {
    state = {
        name: '',
        number: ''
    }
    onInputChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    }
    onSubmitForm = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.clearInput()
    };
    clearInput = () => {
        this.setState({ name: "", number: "" });
    }
    render() {
        return (
            <form className="add-form" onSubmit={this.onSubmitForm}>
                <div>
                <label>
                <h3 className="form-heading">Name</h3>
                <input
                    className="form-input"
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={this.state.name}
                    onChange={this.onInputChange}
                />
                </label>
                <label>
                <h3 className="form-heading">Number</h3>
                <input
                    className="form-input"
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={this.state.number}
                    onChange={this.onInputChange}
                />
                </label>
                </div>
                <button className="form-btn" type="submit">+</button>
            </form>
        )
    }
}

export default AddForm;