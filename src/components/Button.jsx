import React from 'react';
import PropTypes from 'prop-types';
import '../styles/button.css'

const Button = ({ text, onClick, style, className, disabled }) => {
  return (
    <button 
      onClick={onClick} 
      style={style} 
      className={`custom-button ${className}`} 
      disabled={disabled}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,       // Text displayed on the button
  onClick: PropTypes.func,                 // Function to handle click events
  style: PropTypes.object,                 // Inline styles for the button
  className: PropTypes.string,             // Additional CSS classes
  disabled: PropTypes.bool,                // Disable the button
};

Button.defaultProps = {
  onClick: () => {},                       // Default is a no-op
  style: {},                               // Empty styles by default
  className: '',                           // No additional classes by default
  disabled: false,                         // Enabled by default
};

export default Button;