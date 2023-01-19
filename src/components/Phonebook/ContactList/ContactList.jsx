import React from 'react';
import PropTypes from 'prop-types';
import ContactElement from './ContactElement/ContactElement';

const ContactList = ({ contacts, onRemoveContact }) => (
    <ul className='products-list'>
        {contacts.map(({ name, number, id }) => (
            <ContactElement name={name} number={number} id={id} onRemoveContact={onRemoveContact} />
        ))}
    </ul>
);

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
    PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,      
    })
    ),
};

export default ContactList;