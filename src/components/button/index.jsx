import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  label,
  action
}) => {

  return (
    <div>
      <button onClick={action}>{label}</button>
    </div>
  )
};

Button.propTypes = {
  label: PropTypes.string,
  action: PropTypes.func
};

Button.defaultProps = {
  label: 'Button',
  action: () => console.log('Missing action')
}

export default Button;
