import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Filter = ({ value, onChange }) => (
  <Label>
    Find contacts by name
    <Input type="text" name="filter" value={value} onChange={onChange} />
  </Label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
};

const Label = styled.label`
    font-size: 20px;
    font-weight: bold;
    `;

const Input = styled.input`
    border-radius: 5px;
    width: 200px;
    height: 30px;
    margin: 10px;
    font-size: 22px;`

export default Filter;