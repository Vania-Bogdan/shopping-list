import React from 'react';
import PropTypes from 'prop-types';
import ContactElement from './ContactElement/ContactElement';

import styled from "styled-components";

const ContactList = ({ contacts, onRemoveContact }) => (
    <Ul>
        {contacts.map(({ name, number, id }) => (
            <ContactElement name={name} number={number} id={id} onRemoveContact={onRemoveContact} />
        ))}
    </Ul>
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

const Ul = styled.ul`
padding: 0 0 0 10px;`

export default ContactList;