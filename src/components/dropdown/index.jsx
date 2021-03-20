import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const Dropdown = ({
  id,
  label,
  options,
  value,
  handleStateUpdate
}) => {

  return (
    <div>
      <label htmlFor={id}>{label}</label><br/>
      <select name={id} id={id} value={value} onChange={handleStateUpdate}>
        {options.map((option, index) => <option value={option.value} key={index}>{option.label}</option>)}
      </select>
    </div>
  )
};

Dropdown.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array,
  handleStateUpdate: PropTypes.func
}

Dropdown.defaultProps = {
  id: uuidv4(),
  label: 'Label',
  options: [
    {
      value: 0,
      label: 'None'
    }
  ],
  handleStateUpdate: console.warn('Missing state handler on the Dropdown component')
}

export default Dropdown;
