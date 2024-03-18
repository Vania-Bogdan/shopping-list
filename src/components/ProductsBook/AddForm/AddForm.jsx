import React from 'react';

class AddForm extends React.Component {
  state = {
    name: '',
    number: 1,
  };
  onInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  onDecrementNumber = () => {
    this.setState(prevState => ({
      number: Math.max(1, prevState.number - 1),
    }));
  };
  onIncrementNumber = () => {
    this.setState(prevState => ({
      number: prevState.number + 1,
    }));
  };

  onSubmitForm = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.clearInput();
  };
  clearInput = () => {
    this.setState({ name: '', number: 1 });
  };

  render() {
    return (
      <form className="add-form" onSubmit={this.onSubmitForm}>
        <label className="form-label">
          <h3 className="form-heading">Name</h3>
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
        <label className="form-label">
          <h3 className="form-heading">Number</h3>
          <div className="buttons-container">
            <button
              className="number-less-button"
              type="button"
              onClick={this.onDecrementNumber}
            >
              -
            </button>
            <button
              className="number-more-button"
              type="button"
              onClick={this.onIncrementNumber}
            >
              +
            </button>
          </div>
        </label>
        <input
          className="form-input-num"
          type="number"
          autoComplete="off"
          name="number"
          min="1"
          pattern="^[0-9]+$"
          title="Enter products quantity."
          value={this.state.number}
        />

        <button className="form-btn" type="submit">
          Add
        </button>
      </form>
    );
  }
}

export default AddForm;
