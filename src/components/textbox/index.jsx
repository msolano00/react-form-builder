import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const Textbox = ({
  id,
  label,
  handleStateUpdate
}) => {

  return (
    <div>
      <label htmlFor={id}>{label}</label><br />
      <input type="text" id={id} name={id} onChange={handleStateUpdate}/>
    </div>
  )
};

Textbox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  handleStateUpdate: PropTypes.func
}

Textbox.defaultProps = {
  id: uuidv4(),
  label: 'Label',
  handleStateUpdate: () => console.warn(`Missing state handler on the Textbox component`)
}

export default Textbox;
