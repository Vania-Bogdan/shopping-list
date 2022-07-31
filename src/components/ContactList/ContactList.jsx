import React from 'react';
import PropTypes from 'prop-types';
import ContactElement from './ContactElement/ContactElement';

import styled from "styled-components";

const ContactList = ({ contacts, onDeleteContact }) => (
    <Ul>
        {contacts.map(({ name, number, id }) => (
            <ContactElement name={name} number={number} id={id} onDeleteContact={onDeleteContact} />
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