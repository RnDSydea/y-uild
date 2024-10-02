import React from 'react';
import './button.css';

const Button = ({ label, onClick, variant = 'default', disabled = false }) => {
    const buttonClass = `ui5-button ui5-button-${variant} ${disabled ? `ui5-button-${variant}-disabled` : ''}`;
  
  return (
    <button 
      className={buttonClass} 
      onClick={onClick} 
      disabled={disabled}
    //   variant={variant}
      type='button'
    >
      {label}
    </button>
  );
};

export default Button;
