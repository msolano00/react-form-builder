import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const Dropdown = ({
  id,
  label,
  options
}) => {

  return (
    <div>
      <label htmlFor={id}>{label}</label><br/>
      <select name={id} id={id}>
        {options.map((option, index) => <option value={option.value} key={index}>{option.label}</option>)}
      </select>
    </div>
  )
};

Dropdown.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array
}

Dropdown.defaultProps = {
  id: uuidv4(),
  label: 'Label',
  options: [
    {
      value: 0,
      label: 'None'
    }
  ]
}

export default Dropdown;