import React from 'react';
import PropTypes from 'prop-types';

const Infobox = ({message}) => {

  return (
    <div>
      <p>{message}</p>
    </div>
  )
};

Infobox.propTypes = {
  message: PropTypes.string
}

Infobox.defaultProps = {
  message: ''
}

export default Infobox;
