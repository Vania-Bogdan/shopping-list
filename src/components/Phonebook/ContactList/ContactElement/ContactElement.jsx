import React from 'react';
import PropTypes from 'prop-types';
import "../../../../css/styles.css"

const ContactElement = ({ name, number, id, onRemoveContact }) => {
  return (
    <li key={id} className="product-box">
        <p className="product-name">{name + ": " + number}</p>
        <button className="product-btn" onClick={()=>onRemoveContact(id)}>Delete</button>
    </li>
  );
};

ContactElement.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactElement;