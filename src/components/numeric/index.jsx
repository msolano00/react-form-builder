import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const Numeric = ({
  id,
  label,
  value,
  handleStateUpdate
}) => {

  return (
    <div>
      <label htmlFor={id}>{label}</label><br />
      <input 
        type="number" 
        id={id} 
        name={id}
        value={value}
        onChange={handleStateUpdate}/>
    </div>
  )
};

Numeric.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  handleStateUpdate: PropTypes.func
}

Numeric.defaultProps = {
  id: uuidv4(),
  label: 'Label',
  handleStateUpdate: () => console.warn(`Missing state handler on the Numeric component`)
}

export default Numeric;
