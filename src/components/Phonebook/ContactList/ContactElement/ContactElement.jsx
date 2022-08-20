import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContactElement = ({ name, number, id, onDeleteContact }) => {
  return (
    <Li key={id}>
        <p>{name + ": " + number}</p>
      <Btn onClick={()=>onDeleteContact(id)}>Delete</Btn>
      </Li>
  );
};

ContactElement.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

const Li = styled.li`
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    `;

const Btn = styled.button`
    width: 70px;
    height: 50px;
    font-size: 20px;
    font-weight: bold;
    border: 2px solid black;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 50px;
    background: rgb(255, 100, 100);
    padding: 0;
    :hover, :focus {
    color: white;
    background-color: red;
    }
`;


export default ContactElement;