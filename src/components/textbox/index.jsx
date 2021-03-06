import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const Textbox = ({
  id,
  label,
  value,
  handleStateUpdate
}) => {

  return (
    <div>
      <label htmlFor={id}>{label}</label><br />
      <input 
        type="text" 
        id={id} 
        name={id} 
        value={value}
        onChange={handleStateUpdate} 
        autoComplete="off"
      />
    </div>
  )
};

Textbox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  handleStateUpdate: PropTypes.func
}

Textbox.defaultProps = {
  id: uuidv4(),
  label: 'Label',
  handleStateUpdate: () => console.warn(`Missing state handler on the Textbox component`)
}

export default Textbox;
