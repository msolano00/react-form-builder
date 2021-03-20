import React from 'react';
import PropTypes from 'prop-types';

const Infobox = ({information}) => {

  return (
    <div>
      <p>{information}</p>
    </div>
  )
};

Infobox.propTypes = {
  information: PropTypes.string
}

Infobox.defaultProps = {
  information: ''
}

export default Infobox;
