import React from "react";

class AddForm extends React.Component {
    state = {
        name: '',
        number: '1'
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
        this.setState({ name: "", number: "1" });
    }
    render() {
        return (
            <form className="add-form" onSubmit={this.onSubmitForm}>
                <div>
                <label>
                <h3 className="form-heading">Продукт</h3>
                <input
                    className="form-input"
                    type="text"
                    autoComplete="off"
                    name="name"
                    title="Enter product name."
                    required
                    value={this.state.name}
                    onChange={this.onInputChange}
                />
                </label>
                <label>
                <h3 className="form-heading">Кількість</h3>
                <input
                    className="form-input"
                    type="number"
                    autoComplete="off"
                    name="number"
                    min="1"
                    pattern="^[0-9]+$"
                    title="Enter products quantity."
                    // required
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